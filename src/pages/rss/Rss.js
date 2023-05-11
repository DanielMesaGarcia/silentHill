import "./rss.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
function Rss() {
  return (
    <>
      <div class="backgroundN">
        <Header />
        <div className="container">
          <div className="header">
            <h1>RSS Feeds</h1>
            <p>RSS (Really Simple Syndication) is a format for delivering regularly updated web content. It allows you to easily stay informed by retrieving the latest content from your favorite websites.</p>
          </div>
          <div className="content">
            <p>Here is a list of popular RSS feeds:</p>
            <ul class="usp">
              <a href="/assets/rss.xml" type="application/rss+xml">Subscribe to RSS Feed</a>
              <img src="assets\img\rsss.png" class="rsimg"></img>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Rss;