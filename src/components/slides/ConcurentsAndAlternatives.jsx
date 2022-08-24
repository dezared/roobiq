import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ConcurentsAndAlternatives({ title, massive, concurents, properties }) {
    console.log(concurents)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {concurents.map((concurent) => <TableCell key={concurent}>{concurent}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((row, index) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{row}</TableCell>
                {massive[index].map((data) => <TableCell key={data.key}>{data.flag.toString()}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

ConcurentsAndAlternatives.propTypes = {
  title: PropTypes.string,
  massive: PropTypes.array,
  concurents: PropTypes.array,
  properties: PropTypes.array
}

ConcurentsAndAlternatives.defaultProps = {
  title: 'Бизнес-модель',
  concurents: [
    "1",
    "2",
    "3"
  ],
  properties: [
    "cal1",
    "cal2",
    "cal3"
  ],
  title: 'Клиенты',
  massive: [
    [ // x
        { // y
            key: "0-0",
            flag: true,
            star: true
        },
        { // y
            key: "0-1",
            flag: false,
            star: true
        },
        { // y
            key: "0-2",
            flag: false,
            star: true
        }
    ],
    [ // x
        { // y
            key: "1-0",
            flag: false,
            star: true
        },
        { // y
            key: "1-1",
            flag: true,
            star: true
        },
        { // y
            key: "1-2",
            flag: false,
            star: true
        }
    ],
    [ // x
        { // y
            key: "2-0",
            flag: true,
            star: true
        },
        { // y
            key: "2-1",
            flag: false,
            star: true
        },
        { // y
            key: "2-2",
            flag: false,
            star: true
        }
    ]
  ]
}

export default ConcurentsAndAlternatives;