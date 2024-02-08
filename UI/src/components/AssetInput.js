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

  useEffect(() => {
    if (save === "Saved") {
      const timer = setTimeout(() => {
        setSave("Save");
      }, 3000); // Changes back to "Saved" after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [save]);

  const handleSaveButtonClick = () => {
    setSave("Saved");
    // logic for what happens when the asset is saved goes here
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
            defaultValue="Code"
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
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Link"
            placeholder="Paste URL here"
            multiline
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Line Number"
            placeholder=""
            multiline
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Programming language"
            placeholder="Java,Python,etc"
            multiline
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Author"
            placeholder="William"
            multiline
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
          variant="outlined"
          startIcon={<CancelIcon />}
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}
