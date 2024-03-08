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
import * as TypeAPI from "../utility/TypeAPI";
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function FormPropsTextFields() {
  //state variables for save and cancel buttons
  const [save, setSave] = useState("Save");
  const [cancel, setCancel] = useState("Cancel");
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [responseData, setResponseData] = useState([]);

    
  //state variables for form fields
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [lineNum, setlineNum] = useState("");
  const [progLang, setprogLang] = useState("");
  const [customAttribute1, setCustomAttribute1] = useState("");
  const [customAttribute2, setCustomAttribute2] = useState("");
  const [customAttribute3, setCustomAttribute3] = useState("");
  const [customAttribute4, setCustomAttribute4] = useState("");
  const [association1, setAssociation1] = useState(""); 
  const [association2, setAssociation2] = useState(""); 
  const [association3, setAssociation3] = useState(""); 
  const [association4, setAssociation4] = useState(""); 
  const [associationRelation1, setAssociationRelation1] = useState("");
  const [associationRelation2, setAssociationRelation2] = useState("");
  const [associationRelation3, setAssociationRelation3] = useState("");
  const [associationRelation4, setAssociationRelation4] = useState("");


  //useEffect hook to fetch type names to populate the dropdown with
  useEffect(() => {
    TypeAPI.getAll()
      .then((data) => {
        setResponseData(data);
        // Extract only the typeName from each type object
        const typeNames = data.map((type) => type.typeName);
        setTypes(typeNames); // Set the types state with an array of type names
        setType(typeNames[0]); //Set initial selected type to the first
        setSelectedType(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching types:", error);
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
  
  useEffect(() => {
    if (selectedType) {
      setCustomAttribute1(""); 
      setCustomAttribute2(""); 
      setCustomAttribute3(""); 
      setCustomAttribute4("");
    }
  }, [selectedType]);

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
          type: selectedType.typeName,
          title,
          link,
          lineNum,
          progLang,
          customAttribute1,
          customAttribute2,
          customAttribute3,
          customAttribute4,
          association1,
          association2,
          association3,
          association4,
          associationRelation1,
          associationRelation2,
          associationRelation3,
          associationRelation4
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
    setTitle("");
    setLink("");
    setlineNum("");
    setprogLang("");
    setCustomAttribute1("");
    setCustomAttribute2("");
    setCustomAttribute3("");
    setCustomAttribute4("");
    setAssociation1("");
    setAssociation2("");
    setAssociation3("");
    setAssociation4("");
    setAssociationRelation1("");
    setAssociationRelation2("");
    setAssociationRelation3("");
    setAssociationRelation4("");
  };

  
  // Function to handle type selection from dropdown
  const handleTypeChange = (event) => {
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
        <label>Mandatory Attributes: </label>
        <Grid item xs={6}
        alignItems="center"
        >
          <TextField
            id="outlined-select-type"
            select
            label="Type"
            value={type}
            onChange={handleTypeChange}
          >
            {types.map((typeName) => (
              <MenuItem key={typeName} value={typeName}>
                {typeName}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label= "Title"
            placeholder= "Project1"
            multiline
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Link"
            placeholder="google.com"
            multiline
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Line Number"
            placeholder="50"
            multiline
            value={lineNum}
            onChange={(e) => setlineNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label="Programming Language"
            placeholder="Python"
            multiline
            value={progLang}
            onChange={(e) => setprogLang(e.target.value)}
          />
        </Grid>
        </Grid>
        <Grid item xs={6}>
        <label>Type Specific Attributes:</label>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label={selectedType ? selectedType.customAttribute1 : "Custom Attribute 1"}
            placeholder=""
            multiline
            value={customAttribute1}
            onChange={(e) => setCustomAttribute1(e.target.value)}
            style={{ display: selectedType && selectedType.customAttribute1 === "" ? "none" : "grid" }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label={selectedType ? selectedType.customAttribute2 : "Custom Attribute 2"}
            placeholder=""
            multiline
            value={customAttribute2}
            onChange={(e) => setCustomAttribute2(e.target.value)}
            style={{ display: selectedType && selectedType.customAttribute2 === "" ? "none" : "grid" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            label={selectedType ? selectedType.customAttribute3 : "Custom Attribute 3"}
            placeholder=""
            multiline
            value={customAttribute3}
            onChange={(e) => setCustomAttribute3(e.target.value)}
            style={{ display: selectedType && selectedType.customAttribute3 === "" ? "none" : "grid" }}
          />
        </Grid>
	        <Grid item xs={6}>
	          <TextField
	            id="outlined-textarea"
	            label={selectedType ? selectedType.customAttribute4 : "Custom Attribute 4"}
	            placeholder=""
	            multiline
	            value={customAttribute4}
	            onChange={(e) => setCustomAttribute4(e.target.value)}
	            style={{ display: selectedType && selectedType.customAttribute4 === "" ? "none" : "grid" }}
	          />
	        </Grid> 
          </Grid>
        <Grid>
          <label>Association(s)</label>
          <div className="first-division">
            <TextField
              name="associationRelation"
              type="text"
              id="outlined-textarea"
              label="Relation 1:"
              placeholder="Is Documented in..."
              value={associationRelation1}
              onChange={(e) => setAssociationRelation1(e.target.value)}
            />
            <TextField
              name="association"
              type="text"
              id="outlined-textarea"
              label="Asset Id 1:"
              placeholder="3..."
              value={association1}
              onChange={(e) => setAssociation1(e.target.value)}
            />
            <br/>
            <TextField
              name="associationRelation"
              type="text"
              id="outlined-textarea"
              label="Relation 2:"
              placeholder="Is Documented in..."
              value={associationRelation2}
              onChange={(e) => setAssociationRelation2(e.target.value)}
            />
            <TextField
              name="association"
              type="text"
              id="outlined-textarea"
              label="Asset Id 2:"
              placeholder="3..."
              value={association2}
              onChange={(e) => setAssociation2(e.target.value)}
            />
            <br/>
            <TextField
              name="associationRelation"
              type="text"
              id="outlined-textarea"
              label="Relation 3:"
              placeholder="Is Documented in..."
              value={associationRelation3}
              onChange={(e) => setAssociationRelation3(e.target.value)}
            />
            <TextField
              name="association"
              type="text"
              id="outlined-textarea"
              label="Asset Id 3:"
              placeholder="3..."
              value={association3}
              onChange={(e) => setAssociation3(e.target.value)}
            />
            <br/>
            <TextField
              name="associationRelation"
              type="text"
              id="outlined-textarea"
              label="Relation 4:"
              placeholder="Is Documented in..."
              value={associationRelation4}
              onChange={(e) => setAssociationRelation4(e.target.value)}
            />
            <TextField
              name="association"
              type="text"
              id="outlined-textarea"
              label="Asset Id 4:"
              placeholder="3..."
              value={association4}
              onChange={(e) => setAssociation4(e.target.value)}
            />
          </div>
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
