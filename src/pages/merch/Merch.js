import "./merch.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import StoreFunction from "../../components/merchlist/merchstore";
function Merch() {
  return (
    <>
      <div className="backgroundM">
        <Header />
        <StoreFunction />
        <Footer />
      </div>
    </>
  );
}

export default Merch;