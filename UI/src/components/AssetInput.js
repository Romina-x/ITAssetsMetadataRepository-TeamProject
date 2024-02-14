import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const types = [
  {
    value: "Word",
    label: "Word Document",
  },
  {
    value: "Code",
    label: "Source code",
  },
  {
    value: "Slides",
    label: "Powerpoint",
  },
];

export default function FormPropsTextFields() {
  const [save, setSave] = useState("Save");
  const [cancel, setCancel] = useState("Cancel");

  const [type, setType] = useState("Code");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [lineNum, setlineNum] = useState("");
  const [progLang, setprogLang] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (save === "Saved") {
      const timer = setTimeout(() => {
        setSave("Save");
      }, 3000); // Changes back to "Saved" after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [save]);

  useEffect(() => {
    if (cancel === "Cancelled") {
      const timer = setTimeout(() => {
        document.getElementById("cancel-button").style.backgroundColor = "white";
        document.getElementById("cancel-button").style.color = "blue";
        setCancel("Cancel");
      }, 1500); // Changes back to "Cancel" after 3 seconds
      return () => clearTimeout(timer);
    }

  }, [cancel]);

  const handleSaveButtonClick = async (event) => {
    setSave("Saved");
    // logic for what happens when the asset is saved goes here
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/asset/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type,
          title,
          link,
          lineNum,
          progLang
        })
      });
      
      
      if (!response.ok) {
        throw new Error('Failed to add asset');
      }
      resetValue()
      console.log('Asset added successfully');
    } catch (error) {
      console.error('Error adding asset:', error);
    }
  };

  const resetValue = () => {
    setType("Code");
    setTitle("");
    setLink("");
    setlineNum("");
    setprogLang("");
    setAuthor("");
  }

  const handleCancelButtonClick = () => {
    const cancelButtonStyle = document.getElementById("cancel-button").style;
    cancelButtonStyle.backgroundColor = "blue";
    cancelButtonStyle.color = "red";
    setCancel("Cancelled");
    
    resetValue()
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
        background: "white",
        width: "100%",
        maxWidth: "100%",
        margin: 0,
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingBottom: 5,

        }}
      >
        <Grid item xs={6}
        alignItems="center"
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Title"
            placeholder="Module A"
            multiline
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Link"
            placeholder="Paste URL here"
            multiline
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Line Number"
            placeholder=""
            multiline
            value={lineNum}
            onChange={(e) => setlineNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Programming language"
            placeholder="Java,Python,etc"
            multiline
            value={progLang}
            onChange={(e) => setprogLang(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Author"
            placeholder="William"
            multiline
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          style={{ background: "black" }}
          onClick={handleSaveButtonClick}
        >
          {save}
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
    </Box>
  );
}
