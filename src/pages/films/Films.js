import "./films.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
function Films() {
  return (
    <>
      <Header />
      <div class="container">
        <div class="media">
        <img src="../../assets/img/film1.jpg" alt="sh1"/>
        </div>
        <div class="review">
          <h2>Silent Hill (film)</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at faucibus massa, ut venenatis orci. Sed efficitur enim ipsum, ac pulvinar enim rhoncus vitae.</p>
          <p>Nam vel ex et nisl semper maximus non non libero. Sed luctus nisi et lacus sollicitudin, at varius ante aliquam. Nulla vitae tortor et est faucibus luctus vitae et massa. Praesent in orci lacus. </p>
          <a href="https://www.youtube.com/watch?v=dMqtKXy_JfU" class="trailer" target="_blank">Watch Trailer</a>
        </div>
      </div>
      <div class="container">
        <div class="media">
        <img src="../../assets/img/SHR3d.jpg" alt="shr3d"/>
        </div>
        <div class="review">
          <h2>Silent Hill Revelations 3D</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at faucibus massa, ut venenatis orci. Sed efficitur enim ipsum, ac pulvinar enim rhoncus vitae.</p>
          <p>Nam vel ex et nisl semper maximus non non libero. Sed luctus nisi et lacus sollicitudin, at varius ante aliquam. Nulla vitae tortor et est faucibus luctus vitae et massa. Praesent in orci lacus. </p>
          <a href="https://www.youtube.com/watch?v=9b4iOhWswYM" class="trailer" target="_blank">Watch Trailer</a>
        </div>
      </div>
      <div class="container">
        <div class="media">
        <img src="../../assets/img/RSH.jpg" alt="RSH"/>
        </div>
        <div class="review">
          <h2>Return to Silent Hill</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at faucibus massa, ut venenatis orci. Sed efficitur enim ipsum, ac pulvinar enim rhoncus vitae.</p>
          <p>Nam vel ex et nisl semper maximus non non libero. Sed luctus nisi et lacus sollicitudin, at varius ante aliquam. Nulla vitae tortor et est faucibus luctus vitae et massa. Praesent in orci lacus. </p>
          <p>This film is still in early production, so learn more about it in the "What's Next" section of this site!</p>
          <a href="/next">What's next</a>
          <a href="https://www.youtube.com/watch?v=j_FOVN-UkEI" class="trailer" target="_blank">Watch Trailer</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Films;