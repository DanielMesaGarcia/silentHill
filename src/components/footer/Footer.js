import './footer.css';

function Footer() {
  return (
    <div class="foot">
      <div class="footer__info">
        © 2023 MANGO Todos los derechos reservados Política de Privacidad y Cookies | Condiciones de Venta
      </div>
      <div class="footer__social">
        <a class="referencias" href="https://www.facebook.com/Konami">
          <h1>Facebook</h1>
        </a>
        <a class="referencias" href="https://twitter.com/Konami">
        <h1>Twitter</h1>
        </a>
        <a class="referencias" href="https://instagram.com/Konami">
        <h1>Instagram</h1>
        </a>
        <a class="referencias" href="https://store.steampowered.com/developer/Konami">
        <h1>Steam</h1>
        </a>
      </div>
    </div>
  );
}

export default Footer;