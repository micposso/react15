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

  // helper function to allow changing values in the state from different conditions
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  // clear list
  const clearList = () => {
    showAlert(true, "danger", "list is empty");
    setList([]);
  };
  // remove individual items
  const removeItem = (id, title) => {
    showAlert(true, "danger", `${title} has been removed`);
    setList(list.filter((item) => item.id !== id));
  };

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
      <List items={list} removeItem={removeItem} />
      <button className="clear-btn" onClick={clearList}>
        Clear List
      </button>
    </section>
  );
}

export default App;
