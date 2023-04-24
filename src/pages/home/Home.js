import "./home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/cardlist/cardlist";
function Home() {
  return (
    <div class="background">
      <Header />
      <CardList></CardList>
      <Footer />
    </div>
  );
}
// la variable de estado esta en el header
export default Home;