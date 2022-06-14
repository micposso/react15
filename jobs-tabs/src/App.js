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
  // for performing side effects in the components, good for fetching data and added it to the dom when is ready
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

  return <h1>Tabs Project Setup</h1>;
}

export default App;
