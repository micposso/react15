import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data'
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  // need a way to traverse to the array of data
  const [index, setIndex] = useState(2);
  // use useEffect to change the DOM as the data changes
  // useEffect will detect when state changes and run
  useEffect(() => {
    // get last index of array
    const lastIndex = people.length - 1;
    if(index < 0) {
      setIndex(lastIndex);
    } else if(index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    setInterval(() => {
      setIndex(index + 1)
    }, 3000)
  }, [index])

  

  return (
    <section className="section">
      <div className='title'>
        <h1>Reviews</h1>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const {id, image, name, title, quote} = person;
          // more stuff coming up
          let position = 'nextSlide';
          // set active slide by checking if the index is the same in the index state
          if(personIndex === index) {
            position = "activeSlide";
          }
          if(personIndex === index - 1) {
            position = "lastIndex";
          }

          return (
          <article className={position} key={id}>
            <img className="person-img" src={image} alt={name} />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
          )
        })}
        {/* buttons will change index state */}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
