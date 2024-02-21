import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const Login = (props) => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState("Submit");
  const [cancel, setCancel] = useState("Cancel");

  const navigate = useNavigate()

  //useEffect hook to handle changes after submit button is clicked
  useEffect(() => {
    if (submit === "Submitted") {
      const timer = setTimeout(() => {
        setSubmit("Submit");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submit]);

  //useEffect hook to handle changes after cancel button is clicked
  useEffect(() => {
    if (cancel === "Cancelled") {
      const timer = setTimeout(() => {
        document.getElementById("cancel-button").style.backgroundColor = "white";
        document.getElementById("cancel-button").style.color = "blue";
        setCancel("Cancel");
      }, 1500); 
      return () => clearTimeout(timer);
    }

  }, [cancel]);

  const resetValue = () => {
    setUser("");
    setPassword("");

  }

  //function to handle changes when cancel button is clicked
  const handleCancelButtonClick = () => {
    const cancelButtonStyle = document.getElementById("cancel-button").style;
    cancelButtonStyle.backgroundColor = "blue";
    cancelButtonStyle.color = "red";
    setCancel("Cancelled");
    
    resetValue()
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={user}
          placeholder="Enter your username here"
          onChange={(ev) => setUser(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          style={{ background: "black" }}
          // onClick={handleSaveButtonClick}
        >
          {submit}
        </Button>
        <Button
          id="cancel-button"
          variant="outlined"
          startIcon={<CancelIcon />}
          onClick={handleCancelButtonClick}
        >
          {cancel}
        </Button>
      </Stack>
      </div>
    </div>
  )
}

export default Login