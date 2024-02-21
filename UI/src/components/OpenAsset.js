import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import * as AssetAPI from '../AssetAPI';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import * as LogAPI from '../LogAPI';
import { useParams } from "react-router-dom";


export default function OpenAsset() {
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
      const res = await LogAPI.get(openAssetId);
      console.log(res)
      setLogs(res)
    };
    getLogs();
  }, []);

  const [a, setAssets] = React.useState([])
  const [l, setLogs] = React.useState([])


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
            <TableCell>Action</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={l.id}>
              <TableCell>{l.id}</TableCell>
              <TableCell>{l.action}</TableCell>
              <TableCell>{l.timestamp}</TableCell>
            </TableRow>
        </TableBody>
      </Table>

    <h3>Associations:</h3>
    <div style={{ height: '80%' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>

    </React.Fragment>
  );
}