import './footer.css';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__info">
        ©2023 KONAMI Todos los derechos reservados Política de Privacidad y Cookies | Condiciones de Venta
      </div>
      <div class="footer__social">
        <a class="social-link" href="https://www.facebook.com/Konami">
          <img src="/assets/img/facebook-icon.png" alt="facebook" class="imgicon" />
          <h2>Facebook</h2>
        </a>
        <a class="social-link" href="https://twitter.com/Konami">
          <img src="/assets/img/twittericon.png" alt="twt" class="imgicon" />
          <h2>Twitter</h2>
        </a>
        <a class="social-link" href="https://instagram.com/Konami">
          <img src="/assets/img/instagramicon.webp" alt="instagram" class="imgicon" />
          <h2>Instagram</h2>
        </a>
        <a class="social-link" href="https://store.steampowered.com/developer/Konami">
          <img src="/assets/img/steamicon.png" alt="steam" class="imgicon" />
          <h2>Steam</h2>
        </a>
      </div>
    </footer>
  );
}

export default Footer;