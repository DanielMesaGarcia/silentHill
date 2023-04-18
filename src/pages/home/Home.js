import "./home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardList from "../../components/cardlist/cardlist";
function Home() {
  return (
    <>
      <Header />
      <h1>Esto es Home</h1>
      <CardList></CardList>
      <Footer />
    </>
  );
}

export default Home;