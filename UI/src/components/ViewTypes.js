import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, typeName, customAttribute1, customAttribute2, customAttribute3, customAttribute4) {
  return { id, typeName, customAttribute1, customAttribute2, customAttribute3, customAttribute4 };
}

const rows = [
  createData(
    1,
    'powerpoint',
    'author',
    "security level",
    'location',
    "project name",
  ),
  createData(
    2,
    'document',
    'application',
    "end date",
    'file path',
    "doc id",
  ),
  createData(
    3,
    'sourcecode',
    'encrypted',
    "family",
    'contact',
    "data quality",
  ),
  createData(
    4,
    'emails',
    'author',
    "bcc",
    'cc',
    "course",
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ViewTypes() {
  return (
    <React.Fragment>
      <Title>Types</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Custom Attribute Name 1</TableCell>
            <TableCell>Custom Attribute Name 2</TableCell>
            <TableCell>Custom Attribute Name 3</TableCell>
            <TableCell>Custom Attribute Name 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.typeName}</TableCell>
              <TableCell>{row.customAttribute1}</TableCell>
              <TableCell>{row.customAttribute2}</TableCell>
              <TableCell>{row.customAttribute3}</TableCell>
              <TableCell>{row.customAttribute4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}