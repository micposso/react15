import React, { useEffect, useState } from "react";
import './App.css'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import ListComponent from "./components/List";
import AlertComponent from "./components/Alert";
import { List } from "@mui/material";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(false);
  const [alert, setAlert] = useState({ show: false, msd: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form")
    // conditional to handle what happens after adding item
    if(!item) {
      // show alert
    } else if (item && isEditing) {
      // deal with the item
    } else {
      // show alert
      const newItem = {id: new Date().getTime().toString(), title: item};
      setList([...list, newItem])
      setItem('');
    }
  }
  return (
    <div>
      <Grid container justify="center">
        <Container fixed>
          <Paper elevation={3}>
            <h2>Grocery Budy</h2>
              <Box sx={{ width: '100%' }}>
                <form onSubmit={handleSubmit} placeholder="eggs" value={item} onChange={(e) => setItem(e.target.value)}>
                  {alert.show && <AlertComponent />}
                <TextField label="First Name" variant="filled" required />
                <Button type="submit" variant="outlined">
                  {isEditing ? 'edit' : 'submit'}
                </Button>
                </form>
              </Box>
              { /* only show list if there is an list item */ }
            <ListComponent items={list} />
          </Paper>
        </Container>
      </Grid>
    </div>
  );
}

export default App;
