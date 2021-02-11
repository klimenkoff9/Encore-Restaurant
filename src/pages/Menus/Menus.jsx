import React from 'react';
import './Menus.scss';

const displayEmojiName = event => alert(event.target.id);
const menu = [
  {
    name: "Menu a La Carte"
  },
  {
    name: "Silver Banquet"
  },
  {
    name: "Golden Banquet"
  },
  {
      name: "Platinum Banquet"
  }
];

const Menus = () => { 
  return(
    <section className="container">
        <div className="menu-heading">
            <h1>Menus</h1>
        </div>
        <div className="menus">
      <ul>
        {
          menu.map(menus => (
            <li key={menus.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="menu" aria-label={menus.name} id={menus.name}>{menus.name}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
    </section>
  )
}

export default Menus;