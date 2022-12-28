import React from "react";

// if props is an object, it needs to be called in the component inside {}
// map function should return jsx
// when destructuring, use the same key names of the original object

const List = ({ items }) => {
  return (
    <div class="item-list">
      <h3>list</h3>
      {items.map((item) => {
        // destructure object
        const { id, title } = item;
        return <b key={id}>{title}</b>;
      })}
    </div>
  );
};

export default List;
