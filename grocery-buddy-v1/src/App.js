import React, { useState, useEffect } from 'react';
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
  const [ name, setName ] = useState('');
  const [ list, setList ] = useState([]);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ alert, setAlert ] = useState({show: false, msg:'', type: ''});
  
  const handleSubmit = () => {};
  return (
<section className="section-center">
  <form action="grocery-form" onSubmit={handleSubmit}>

  </form>
  <List />
  <button className="clear-btn">Clear List</button>
</section>
  );
}

export default App;
