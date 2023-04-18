import CardService from "../../services/homemenu";

function CardList() {
  const getCards = () => {
    const allCards = CardService.getCards();

    return (
      allCards.map(c => {
        return(
        <div className="card-item">
          <div className="card-list-img">
            <img src={`/assets/img/${c.img}`} alt="card"/>
          </div>
        <p>{c.title}</p>
        </div>
      );
      })
    );
  }

  return (
    <>
      {getCards()}
    </>
  );
}

export default CardList;