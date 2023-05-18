import { useState, useEffect, useRef } from "react";
import store from "../../services/store";
import "./merchstore.css";

function StoreFunction() {
  const [cards, setCards] = useState([]);
  const refForm = useRef();
  const getCards = () => {
    store.getCards()
      .then((items) => {
        let allCards = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allCards.push({
            key: key,
            title: data.title,
            img: data.img,
            description: data.description
          });
        });
        setCards([...allCards]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeCard = (key) => {
    store.removeCard(key).then(() => {
      setCards(oldCards => oldCards.filter(card => card.key !== key));
    });
  };
  

  const addCard = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const img = "newimg.avif";
    if (title.trim() === "") {
      return; // Exit the function if title is empty or contains only whitespace
    }
    store.addCard(title, img, description).then((res) => {
      refForm.current.reset();
      setCards(oldValues => [...oldValues, { key: res.key, title, img, description }])
    })
  }

  const updateCard = (cardKey, title, description, img) => {
    if (title.trim() === "") {
      return; // Exit the function if title is empty or contains only whitespace
    }
    const updatedCards = cards.map((card) => {
      
      if (card.key === cardKey) {
        return { ...card, title, description, img };
      }
      return card;
    });
  
    setCards(updatedCards);
  };
  
  
  
  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
    <form id="bicycle-form" onSubmit={addCard} ref={refForm}>
            <input className="rounded-input" type="text" name="title" id="title" placeholder="title"/>
            <input className="rounded-input" type="text" name="description" id="descrip" placeholder="description"/>
            <input className="rounded-input" type="submit" value="Add Card"/>
          </form>
    <div className="card-list">
      
      {cards.map(c => (
        <a className="card-item">
          <div className="card-list-img">
            <img src={`/assets/img/${c.img}`} alt="card" />
          </div>
          <b>{c.title}</b>
          <button onClick={() => removeCard(c.key)}>DEL</button>
          <button onClick={() => updateCard(c.key, document.getElementById("title").value, document.getElementById("descrip").value, c.img)}>UPD</button>


          <p>{c.description}</p>
        </a>
      ))}
    </div>
    </>
  );
  
}

export default StoreFunction;

