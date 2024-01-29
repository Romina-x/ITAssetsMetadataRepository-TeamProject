import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from '@mui/icons-material/Save';
import Stack from "@mui/material/Stack";

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
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        background: "white",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-select-currency"
        select
        label="Type"
        defaultValue="Code"
        helperText="Type of your Data"
      >
        {types.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-textarea"
        label="Title"
        placeholder="Module A"
        multiline
      />
      <TextField
        id="outlined-textarea"
        label="Link"
        placeholder="Paste URL here"
        multiline
      />
      <TextField
        id="outlined-textarea"
        label="Line Number"
        placeholder=""
        multiline
      />
      <TextField
        id="outlined-textarea"
        label="Programming language"
        placeholder="Java,Python,etc"
        multiline
      />
      <TextField
        id="outlined-textarea"
        label="Author"
        placeholder="William"
        multiline
      />

      <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<SaveIcon />}>
          Saved
        </Button>
        <Button variant="outlined" startIcon={<CancelIcon />}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}
