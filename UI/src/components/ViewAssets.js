import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function ViewAssets() {
  React.useEffect(() => {
    const getAssets = async () => {
      try {
        const response = await fetch('/asset/find/all');
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setAssets(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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
            <TableCell>link</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Programming language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.type}</TableCell>
              <TableCell>{a.title}</TableCell>
              <TableCell>{a.link}</TableCell>
              <TableCell>{a.lineNum}</TableCell>
              <TableCell align="right">{a.progLang}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}