import React, { useState, useEffect } from "react";
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
    <div>
      <h1>{title}</h1>
      {duties.map((duty, index) => {
        return (
          <div>{duty}</div>
          )
      })}
    </div>
  )
}

export default App;
