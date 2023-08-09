import { useState } from "react";
import "./App.css";
import { Button, Paper } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const incHandler = () => {
    setCount(count + 1);
  };
  const decHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h2 sx={{ fontWeight: "bold" }}> Increament & Decreament </h2>
      <div className="inc-dec-div">
        <Button variant="contained" onClick={decHandler}>
          -
        </Button>
        <Paper elevation={3} sx={{
            minWidth: "80px",
            marginLeft: "5px",
            marginRight: "5px",
            color:'red',
            fontWeight:'bold',
            textAlign:'center'
          }}>{count}</Paper>
        <Button variant="contained" onClick={incHandler}>
          +
        </Button>
      </div>
      <Button variant="contained" onClick={resetHandler}>
        Reset
      </Button>
    </div>
  );
}

export default App;
