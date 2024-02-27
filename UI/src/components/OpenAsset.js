import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from "@mui/material/TextField";
import * as React from 'react';
import { useEffect, useState } from "react";
import Title from './Title';
import 'reactflow/dist/style.css';
import { useParams } from "react-router-dom";
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import * as AssetAPI from '../utility/AssetAPI';
import * as CommentAPI from '../utility/CommentAPI';
import * as LogAPI from '../utility/LogAPI';
import Box from "@mui/material/Box";



export default function OpenAsset() {
  const [save, setSave] = useState("Save");
  const [cancel, setCancel] = useState("Cancel");
  const currentDate = Date.now();

  const [a, setAssets] = React.useState([])
  const [logs, setLogs] = React.useState([])
  const [comments, setComments] = React.useState([])

  const [comment, setAssetComment] = useState("");
  const [time, setTime] = useState("");
  const [itemId, setItemId] = useState("");

  let { openAssetId } = useParams();

  React.useEffect(() => {
    const getAssets = async () => {
      const res = await AssetAPI.get(openAssetId);
      console.log(res)
      setAssets(res)
    };

    getAssets();
  }, []);

  React.useEffect(() => {
    const getLogs = async () => {
      const res = await LogAPI.getAll();
      console.log(res)
      setLogs(res)
    };
    getLogs();
  }, []);

  React.useEffect(() => {
    const getComments = async () => {
      const res = await CommentAPI.getAll();
      console.log(res)
      setComments(res)
    };
    getComments();
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
  // logic for what happens when the asset is saved goes here
  event.preventDefault();
  const currentTime = new Date().toISOString();

  try {
    const response = await fetch('http://localhost:8080/comment/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemId: a.id,
        comment: comment,
        timestamp: currentTime
      })
    });
    
    
    if (!response.ok) {
      throw new Error('Failed to add comment');
    }
    resetValue()
    console.log('Comment added successfully');
    setComments(await CommentAPI.getAll());
    setSave("Saved");
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

const resetValue = () => {
  setItemId("");
  setAssetComment("");
  setTime("");
}
  //function to handle changes when cancel button is clicked
  const handleCancelButtonClick = () => {
    const cancelButtonStyle = document.getElementById("cancel-button").style;
    cancelButtonStyle.backgroundColor = "blue";
    cancelButtonStyle.color = "red";
    setCancel("Cancelled");
    
    resetValue()
  };



  const edges = [{ id: '1-2', source: '1', target: '2', label: 'Is Documented In', type: 'straightedge' },
                  { id: '1-3', source: '1', target: '3', label: 'Depends On', type: 'straightedge' },
                  { id: '1-4', source: '1', target: '4', label: 'Succeeded By', type: 'straightedge' }];
            
  const nodes = [{
                  id: '1',
                  data: { label: 'Title: ' + a.title },
                  position: { x: 220, y: 20 },
                  type: 'input',
                },
                {
                  id: '2',
                  data: { label: 'Asset ID: ' + a.isDocumentedIn },
                  position: { x: 220, y: 170 },
                },
                {
                  id: '3',
                  data: { label: 'Asset ID: ' + a.dependsOn },
                  position: { x: 20, y: 170 },
                },
                {
                  id: '4',
                  data: { label: 'Asset ID: ' + a.succeededBy },
                  position: { x: 420, y: 170 },
                }
                ];

  return (
    <React.Fragment>
      <Title>Viewing Asset ID {a.id}:</Title>
      <h3>Details:</h3>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Programming language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={a.id}>
              <TableCell>{a.type}</TableCell>
              <TableCell>{a.link}</TableCell>
              <TableCell>{a.title}</TableCell>
              <TableCell align="right">{a.progLang}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    
      <h3>Action Log:</h3>
      <Table size="small">
        <TableHead>
        <TableRow>
            <TableCell>Action ID</TableCell>
            <TableCell>Logged Action</TableCell>
            <TableCell align="right">Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {logs.map((l) => {
          if (l.itemId === a.id) {
            return (
              <TableRow key={l.id}>
                <TableCell>{l.id}</TableCell>
                <TableCell>{l.action}</TableCell>
                <TableCell align="right">{l.timestamp}</TableCell>
              </TableRow>
            );
          } else {
            return null; 
          }
        })}
        </TableBody>
      </Table>

    <h3>Associations:</h3>
    <div style={{ height: 300 }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>

    <h3>Asset Comments:</h3>
      <Table size="small">
        <TableHead>
        <TableRow>
            <TableCell>Comment ID</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell align="right">Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((c) => {
          if (c.itemId === a.id) {
            return (
              <TableRow key={c.id}>
              <TableCell>{c.id}</TableCell>
              <TableCell>{c.comment}</TableCell>
              <TableCell align="right">{c.timestamp}</TableCell>
            </TableRow>
            );
          } else {
            return null; 
          }
        })}
        </TableBody>
      </Table>
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
      <Grid item xs={6}>
          <TextField
            id="outlined-textarea"
            placeholder= "Enter a comment here"
            multiline
            value={comment}
            onChange={(e) => setAssetComment(e.target.value)}
          />
        </Grid>

        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          style={{ background: "black" }}
          onClick={handleSaveButtonClick}
        >
          {save}
        </Button>
        
      </Box>
    </React.Fragment>
  );
}