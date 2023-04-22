import "./games.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
function Games() {
  return (
    <>
      <Header />
      <div class="rectangles">
        <div class="rectangles__item">
          <img src="../../assets/img/SH1.jpeg" class="rectangles__img" alt="SH1" />
          <p class="rectangles__text"> Silent Hill 1 takeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH2.webp" class="rectangles__img" alt="SH2" />
          <p class="rectangles__text"> Silent Hill 2 takeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH3.jpg" class="rectangles__img" alt="SH3" />
          <p class="rectangles__text"> Silent Hill 3 takeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH4.jpg" class="rectangles__img" alt="SH4" />
          <p class="rectangles__text"> Silent Hill 4 takeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item"> 
        {/* ESTE NO VA AUN */}
          <img src="../../assets/img/SH5.jpg" class="rectangles__img" alt="SH5" />
          <p class="rectangles__text"> Silent Hill Homecoming takeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH6.jpg" class="rectangles__img" alt="SH6" />
          <p class="rectangles__text"> Silent Hill Origins takeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH7.webp" class="rectangles__img" alt="SH7" />
          <p class="rectangles__text"> Silent Hill Shattered Memories takeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH8.jpg" class="rectangles__img" alt="SH8" />
          <p class="rectangles__text"> Silent Hill Downpour takeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Games;