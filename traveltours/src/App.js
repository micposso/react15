import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id );
    setTours(newTours);
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Loading />
        </Container>
      </React.Fragment>
    );
  }

  if(tours.length === 0) {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h2>There are no more tours</h2>
        <Button size="small" color="primary" onClick={fetchTours}>
          load tours
        </Button>
      </Container>
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Tours tours={tours} removeTour={removeTour} />
      </Container>
    </React.Fragment>
  );
}

export default App;
