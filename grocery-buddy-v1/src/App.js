import React, { useState, useEffect } from "react";
import List from "./components/ListComponent";
import Alert from "./components/AlertComponent";

// Functionality description

// add an item via a form
// Items can be removed and edited
// when items are created, removed or edited, and alers will appear
// there is a max of 10 items to add * more than 10, creates pagination
// there cannot be duplicate items *
// uses local storage for persisten data

// STATE
// name of item
// state of item, editing, removed, added
// need a reference of what is being edited, and that is an I
// alert will need an object, with visibility status, message and type

function App() {
  const [itemName, setItemName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: null,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName) {
      // display alert error
      setAlert({ show: true, msg: "please enter value", type: "danger" });
    } else if (itemName && isEditing) {
      // deal with edit state
      
    } else {
      // procceed with saving item on list state and show sucess alert message
      // items need a unique ID
      const newItem = { id: new Date().getTime().toString(), title: itemName };
      setList([...list, newItem]);
      setItemName("");
      showAlert(true, "success", "item added!");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

// add the remove all items function

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  }

// add the edit and remove item function on the buttons
const removeItem = (id) => {
  console.log("remove function works");
  showAlert(true, 'danger', 'item removed');
  setList(list.filter((item) => item.id !== id));
} 

const editItem = (id) => {
// need to return the item that matches the id
const specificItem = list.find((item) => item.id === id);
setIsEditing(true);
setEditID(id);
// grab title value
setItemName(specificItem.title);
}

  return (
    <section className="section-center">
      <h3>Grocery Buddy</h3>
      <form action="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eggs, milk etc"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          {/* button text is based on the state */}
          <button type="submit" className="submit-btn">
            {isEditing ? "edit item" : "add item"}
          </button>
        </div>
      </form>
      {/* pass the removeItem as a prop so it can be used in the component */}
      <List items={list} removeItem={removeItem} editItem={editItem} />
      <button className="clear-btn" onClick={clearList}>Clear List</button>
    </section>
  );
}

export default App;

