import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, type, title,link, lineNum, progLang) {
  return { id, type, title,link, lineNum, progLang};
}

const rows = [
  createData(
    1,
    'powerpoint',
    'Lecture 1',
    "www.google.com",
    30,
    "English",
  ),
  createData(
    1,
    'powerpoint',
    'Lecture 1',
    "www.google.com",
    30,
    "English",
  ),
  createData(
    1,
    'powerpoint',
    'Lecture 1',
    "www.google.com",
    30,
    "English",
  ),
  createData(
    1,
    'powerpoint',
    'Lecture 1',
    "www.google.com",
    30,
    "English",
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ViewAssets() {
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.link}</TableCell>
              <TableCell>{row.lineNum}</TableCell>
              <TableCell align="right">{row.progLang}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}