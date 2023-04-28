import store from "../../services/store";
import "./merchstore.css";
function StoreFunction() {
  const getStoreList = () => {
    const allCards = store.getCards();

    return (
      <div className="card-list">
        {allCards.map(c => (
          <a className="card-item">
            <div className="card-list-img">
              <img src={`/assets/img/${c.img}`} alt="card"/>
            </div>
            <b>{c.title}</b>
            <p>{c.description}</p>
          </a>
        ))}
      </div>
    );
  }

  return (
    <>
      {getStoreList()}
    </>
  );
}

export default StoreFunction;

