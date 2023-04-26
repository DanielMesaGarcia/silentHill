import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        ©2023 KONAMI Todos los derechos reservados Política de Privacidad y Cookies | Condiciones de Venta
      </div>
      <div className="footer__social">
        <a className="social-link" href="https://www.facebook.com/Konami">
          <img src="/assets/img/facebook-icon.png" alt="facebook" className="imgicon" />
          <h2>Facebook</h2>
        </a>
        <a className="social-link" href="https://twitter.com/Konami">
          <img src="/assets/img/twittericon.png" alt="twt" className="imgicon" />
          <h2>Twitter</h2>
        </a>
        <a className="social-link" href="https://instagram.com/Konami">
          <img src="/assets/img/instagramicon.webp" alt="instagram" className="imgicon" />
          <h2>Instagram</h2>
        </a>
        <a className="social-link" href="https://store.steampowered.com/developer/Konami">
          <img src="/assets/img/steamicon.png" alt="steam" className="imgicon" />
          <h2>Steam</h2>
        </a>
        <a className="social-link" href="https://github.com/DanielMesaGarcia">
          <img src="/assets/img/githubicon.png" alt="github" className="imgicon" />
          <h2>Designer's GitHub</h2>
        </a>
      </div>
    </footer>
  );
}

export default Footer;