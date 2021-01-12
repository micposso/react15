import React from 'react';

const Menu = ({items}) => {
   
  return <div className="section-center">
    {items.map((menuItem) => {
      //console.log(menuItem);
      const { id, title, img, desc, price } = menuItem;
      return <article className="menu-item" key={id}>
        <img src={img} alt="" className="photo" />
        <header>{title}</header>
        <p>{desc}</p>
        <p>{price}</p>
      </article>
    })}
  </div>;
};

export default Menu;