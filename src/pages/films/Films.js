import "./films.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
function Films() {
  return (
    <>
    <div class="backgroundF">
      <Header />
      
      <div class="container">
        <div class="media">
          <img src="../../assets/img/film1.jpg" alt="sh1" class="long"/>
        </div>
        <div class="review">
          <h2>Silent Hill (film)</h2>
          <p>The film follows Rose Da Silva, a loving mother who takes her adopted daughter to Silent Hill, West Virginia, the only clue to her daughter's sleepwalking condition. Upon arriving in town Rose is knocked unconscious in a car crash, from which she awakens to find her daughter is missing in the fog engulfed town. During her search Rose discovers her daughter's connection to the town's disturbing history.</p>
          <p>The film is a loose adaptation of the first Silent Hill video game, which was developed by Team Silent and published by Konami. However, while there are strong similarities to the video games, there are many key differences to the point where the film is its own installment as it was never intended to be a fully faithful live-action recreation of the video game. It should not be considered a replacement for the video game. The film is also set in a separate continuity from the video games so it is non-canonical to them. The film also takes elements from Silent Hill 2 and Silent Hill 3, and includes the soundtracks from 1, 2, 3, and Silent Hill 4: The Room.</p>
          <a href="https://www.youtube.com/watch?v=dMqtKXy_JfU" className="trailer" target="_blank">Watch Trailer</a>
        </div>
      </div>
      <div class="container">
        <div class="media">
          <img src="../../assets/img/SHR3d.jpg" alt="shr3d" class="long"/>
        </div>
        <div class="review">
          <h2>Silent Hill Revelations 3D</h2>
          <p>The film is a sequel to the first Silent Hill film and a loose adaptation of Silent Hill 3, which was developed by Team Silent and published by Konami. The film universe is separate from the game universe and is set in a separate canon continuity.
            The film follows Heather Mason, a teenager searching for her adoptive father in Silent Hill, West Virginia. During her journey, she discovers the town's disturbing history, as well as her own.
          </p>

          <a href="https://www.youtube.com/watch?v=9b4iOhWswYM" className="trailer" target="_blank">Watch Trailer</a>
        </div>
      </div>
      <div class="container">
        <div class="media">
          <img src="../../assets/img/RSH.jpg" alt="RSH" class="short"/>
        </div>
        <div class="review">
          <h2>Return to Silent Hill</h2>
          <p>Return to Silent Hill is an upcoming psychological horror film directed by Christophe Gans from a screenplay he co-wrote with Sandra Vo-Anh and William Josef Schneider, and starring Jeremy Irvine and Hannah Emily Anderson. It is an adaptation of Silent Hill 2 and a reboot of the 2006-2012 film series.</p>
          <p>This film is still in early production, so learn more about it in the "What's Next" section of this site!</p>
          <a href="/next">What's next</a>
          <a href="https://www.youtube.com/watch?v=j_FOVN-UkEI" className="trailer" target="_blank">Watch Trailer</a>
        </div>
      </div>
      
      <Footer />
      </div>
    </>
  );
}

export default Films;