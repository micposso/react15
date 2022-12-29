import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

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
        return (
          <article className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit btn">
                <FaEdit />
              </button>
              <button className="edit btn">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
