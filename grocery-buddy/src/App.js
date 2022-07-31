import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import ListComponent from "./components/List";
import AlertComponent from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(false);
  const [alert, setAlert] = useState({ show: false, msd: "", type: "" });

  return (
    <div>
      <Grid container justify="center">
<h2>adfaddf</h2>
<AlertComponent />
<ListComponent />
      </Grid>
    </div>
  );
}

export default App;
