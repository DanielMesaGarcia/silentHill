import './header.css';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const categorySelect = document.getElementById('category-select');
    const pathName = window.location.pathname;

    // Set the selected option based on the current path name
    const selectedOption = categorySelect.querySelector(`option[value="${pathName.slice(1)}"]`);
    if (selectedOption) {
      selectedOption.selected = true;
    }

    categorySelect.addEventListener('change', function() {
      const selectedValue = this.value;
      if (selectedValue) {
        window.location.href = `/${selectedValue}`;
      }
    });
  }, []);

  return (
    <div className="header">
      <h1>Silent Hill</h1>
      <a href="/" className="btn-home">Return to home</a>
      <select id="category-select">
        <option value="home">Home</option>
        <option value="games">Games</option>
        <option value="films">Films</option>
        <option value="merch">Merch</option>
        <option value="next">What's next</option>
      </select>
    </div>
  );
}
 
export default Header;
