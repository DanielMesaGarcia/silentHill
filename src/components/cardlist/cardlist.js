import CardService from "../../services/homemenu";
import "./cardlist.css";
function CardList() {
  const getCardsList = () => {
    const allCards = CardService.getCards();

    return (
      <div className="card-list">
        {allCards.map(c => (
          <a className="card-item" href={`${c.link}`}>
            <div className="card-list-img">
              <img src={`/assets/img/${c.img}`} alt="card"/>
            </div>
            <p>{c.title}</p>
          </a>
        ))}
      </div>
    );
  }

  return (
    <>
      {getCardsList()}
    </>
  );
}

export default CardList;

