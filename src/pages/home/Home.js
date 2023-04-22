import "./home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/cardlist/cardlist";
function Home() {
  return (
    <div class="background">
      <Header />
      <h1>Esto es Home</h1>
      <CardList></CardList>
      <Footer />
    </div>
  );
}

export default Home;