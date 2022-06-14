import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
        <Categories filterItems={filterItems} categories={allCategories} />
        <Menu items={menuItems}/>
      </div>
    </section>
  </main>;
}

export default App;