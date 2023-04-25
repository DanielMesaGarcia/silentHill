import CardService from "../../services/homemenu";
import "./cardlist.css";
import MyCarousel from '../carousel/Carousel.js';

function CardList() {
  const getCardsList = () => {
    const allCards = CardService.getCards();
    const images = ['/assets/img/SH1.jpeg', '/assets/img/SH2.webp', '/assets/img/SH3.jpg'];
    return (
      <>
        <div className="card-list">
          {allCards.map(c => (
            <a className="card-item" href={`${c.link}`}>
              <div className="card-list-img">
                <img src={`/assets/img/${c.img}`} alt="card" />
              </div>
              <p>{c.title}</p>
            </a>
          ))}
        </div>
        <div className="carousel">
          <MyCarousel images={images} />
        </div>
      </>
    );
  }

  return (
    <>
      {getCardsList()}
    </>
  );
}

export default CardList;

