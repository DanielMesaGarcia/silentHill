import "./next.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
function Next() {
  return (
    <>
      <Header />
      <div class="container">
        <div class="media">
        <img src="../../assets/img/film1.jpg" alt="sh1"/>
        </div>
        <div class="review">
          <h2>Film Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at faucibus massa, ut venenatis orci. Sed efficitur enim ipsum, ac pulvinar enim rhoncus vitae.</p>
          <p>Nam vel ex et nisl semper maximus non non libero. Sed luctus nisi et lacus sollicitudin, at varius ante aliquam. Nulla vitae tortor et est faucibus luctus vitae et massa. Praesent in orci lacus. </p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="trailer" target="_blank">Watch Trailer</a>
        </div>
      </div>
      <div class="container">
        <div class="media">
        <img src="../../assets/img/film1.jpg" alt="sh1"/>
        </div>
        <div class="review">
          <h2>Film Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at faucibus massa, ut venenatis orci. Sed efficitur enim ipsum, ac pulvinar enim rhoncus vitae.</p>
          <p>Nam vel ex et nisl semper maximus non non libero. Sed luctus nisi et lacus sollicitudin, at varius ante aliquam. Nulla vitae tortor et est faucibus luctus vitae et massa. Praesent in orci lacus. </p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="trailer" target="_blank">Watch Trailer</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Next;