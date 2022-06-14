import React, { useState } from "react";
import SingleColor from "./components/SingleColor";
import Values from "values.js";
import "./App.css";

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10);
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h1>Color generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Add color code here"
            className={`${error ? 'error' : null}`}
          />
          <button type="submit">submit</button>
        </form>
      </section>
      <section className="container-colors">
        {list.map((color, index) => {
          console.log(list)
          return (
            <SingleColor key={index} {...color} index={index} />
          )
        })}
      </section>
    </>
  );
}

export default App;
