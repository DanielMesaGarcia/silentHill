import './header.css';
import { useEffect, useState } from 'react';

function Header() {
  const [selectedCategory, setSelectedCategory] = useState('home');

  useEffect(() => {
    const pathName = window.location.pathname.slice(1);
    setSelectedCategory(pathName || 'home');
  }, []);

  function handleCategoryChange(event) {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    if (selectedValue) {
      window.location.href = `/${selectedValue}`;
    }
  }

  return (
    <div className="header">
      <div class="imagenes">
        <img src="/assets/img/cult.png" alt="cult" id="cultlogo" />
        <img src="/assets/img/SHlogo.png" alt="silenthill" id="letters" />
      </div>
      <div class="botones">
        <a href="/" className="btn-home">Return to home</a>
        <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="home">Home</option>
          <option value="games">Games</option>
          <option value="films">Films</option>
          <option value="merch">Merch</option>
          <option value="next">What's next</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
