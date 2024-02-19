import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import * as AssetAPI from '../AssetAPI';

export default function ViewAssets() {
  React.useEffect(() => {
    const getAssets = async () => {
      const res = await AssetAPI.getAll();
      console.log(res)
      setAssets(res)
    };

    getAssets();
  }, []);

  const [assets, setAssets] = React.useState([])

  return (
    <React.Fragment>
      <Title>Assets</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Programming language</TableCell>
            <TableCell>Is Documented In</TableCell>
            <TableCell>Depends On</TableCell>
            <TableCell align="right">Succeeded By</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.id}</TableCell>
              <TableCell>{a.type}</TableCell>
              <TableCell>{a.link}</TableCell>
              <TableCell>{a.title}</TableCell>
              <TableCell>{a.progLang}</TableCell>
              <TableCell>{a.isDocumentedIn}</TableCell>
              <TableCell>{a.dependsOn}</TableCell>
              <TableCell align="right">{a.succeededBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}