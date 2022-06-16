import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'

import "./App.css";

function App() {
  const url = "http://localhost:8080/resume";
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const newJobs = await response.json();
      console.log({ newJobs });
      setJobs(newJobs);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  // for performing side effects in the components, good for fetching data and added it to the dom when is ready. The array stores what has changed when the app renders
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { title, dates, duties, company } = jobs[value];
  return (
    <section className="section">
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {jobs.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {item.company}
            </button>
          )
        })}
      </div>
      {/* job info */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          )
        })}
      </article>
    </div>
    <button type="button" className="btn">
      more info
    </button>
  </section>
  )
}

export default App;
