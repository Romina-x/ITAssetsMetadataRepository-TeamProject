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
import { getAll } from "../AssetAPI";


export default function FormPropsTextFields() {
  //state variables for save and cancel buttons
  const [save, setSave] = useState("Save");
  const [cancel, setCancel] = useState("Cancel");
  const [selectedType, setSelectedType] = useState(null);
  const [responseData, setResponseData] = useState([]);
  const [assetAttributes, setTypes] = useState([]);
  const [assetAttribute, setType] = useState("");
  const [searchExpression, setSearchExpression] = useState("contains");
  const [searchTerm, setSearchTerm] = useState("");

  const searchExpressions = [
    {
      value: "contains",
      label: "contains",
    },
    {
      value: "containsExact",
      label: "contains exact phrase",
    },
    {
      value: "starts",
      label: "starts with",
    },
    {
      value: "equalsExact",
      label: "equals exact phrase",
    },
  ];
  
  
  //useEffect hook to fetch type names to populate the dropdown with
  useEffect(() => {
    getAllAssets()
      .then((data) => {
        setResponseData(data);
        // Extract only the typeName from each type object
        const assetAttributes = Object.keys(data[0]);//data.map((type) => type.typeName);
        setTypes(assetAttributes); // Set the types state with an array of type names
        setType(assetAttributes[0]); //Set initial selected type to the first
        setSelectedType(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching assets:", error);
      });
  }, []); 


  //useEffect hook to handle changes after save button is clicked
  useEffect(() => {
    if (save === "Saved") {
      const timer = setTimeout(() => {
        setSave("Save");
      }, 2000); // Changes back to "Saved" after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [save]);

  //useEffect hook to handle changes after cancel button is clicked
  useEffect(() => {
    if (cancel === "Cancelled") {
      const timer = setTimeout(() => {
        document.getElementById("cancel-button").style.backgroundColor = "white";
        document.getElementById("cancel-button").style.color = "blue";
        setCancel("Cancel");
      }, 1500); // Changes back to "Cancel" after 1.5 seconds
      return () => clearTimeout(timer);
    }

  }, [cancel]);

  //function to handle changes when save button is clicked
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
          type: searchExpression,
          title: searchTerm,
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
    setSearchExpression("Code");
    setSearchTerm("");
  }

  // Function to handle type selection from dropdown
  const handleAssetAttributeChange = (event) => {
    const typeName = event.target.value;
    const selectedType = responseData.find((type) => type.typeName === typeName);
    setSelectedType(selectedType);
    setType(typeName); // Update the type state variable
  };

  //function to handle changes when cancel button is clicked
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
          label="Asset Attribute"
          value={assetAttribute}
          onChange={handleAssetAttributeChange}
        >
          {assetAttributes.map((attributeName) => (
            <MenuItem key={attributeName} value={attributeName}>
              {attributeName}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
        <Grid item xs={6}
        alignItems="center"
        >
          <TextField
            id="outlined-textarea"
            select
            value={searchExpression}
            onChange={(e) => setSearchExpression(e.target.value)}
          >
            {searchExpressions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            placeholder="Enter a search term"
            multiline
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
