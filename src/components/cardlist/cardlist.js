import CardService from "../../services/homemenu";
import "./cardlist.css";
function CardList() {
  const getCardsList = () => {
    const allCards = CardService.getCards();

    return (
      <div className="card-list">
        {allCards.map(c => (
          <div className="card-item">
            <div className="card-list-img">
              <img src={`/assets/img/${c.img}`} alt="card"/>
            </div>
            <p>{c.title}</p>
          </div>
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

