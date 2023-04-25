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
          <h2>Silent Hill 1</h2>
          <p class="rectangles__text">pepe pepe pepepepe pepe pepepepe pepe pepepepe pepe pepepepe pepe pepe</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH2.webp" class="rectangles__img" alt="SH2" />
          <h2>Silent Hill 2</h2>
          <p class="rectangles__text">pepe pepe pepepepe pepe pepepepe pepe pepepepe pepe pepepepe pepe pepepepe pepe pepepepe pepe pepepepe pepe pepepepe pepe pepe</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH3.jpg" class="rectangles__img" alt="SH3" />
          <h2>Silent Hill 3</h2>
          <p class="rectangles__text">takeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH4.jpg" class="rectangles__img" alt="SH4" />
          <h2>Silent Hill 4</h2>
          <p class="rectangles__text">takeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeee</p>
        </div>
        <div class="rectangles__item"> 
        {/* ESTE NO VA AUN */}
          <img src="../../assets/img/SH5.jpg" class="rectangles__img" alt="SH5" />
          <h2>Silent Hill Homecoming</h2>
          <p class="rectangles__text">takeeeeeeeeeeeeee eeeeeeeeeeee eeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH6.png" class="rectangles__img" alt="SH6" />
          <h2>Silent Hill Origins</h2>
          <p class="rectangles__text">takeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeee eeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH7.webp" class="rectangles__img" alt="SH7" />
          <h2>Silent Hill Shattered Memories</h2>
          <p class="rectangles__text">takeeeeeeeeeeeeee  eeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
        <div class="rectangles__item">
          <img src="../../assets/img/SH8.jpg" class="rectangles__img" alt="SH8" />
          <h2>Silent Hill Downpour</h2>
          <p class="rectangles__text">takeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeee eeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Games;