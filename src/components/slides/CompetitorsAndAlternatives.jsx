//import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from "styled-components";

const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 1em;
`;

const Title = styled.h1`
  position: absolute;
  left: 5.21%;
  right: 73.8%;
  top: 9.26%;
  bottom: 78.89%;
  font-weight: 500;
  font-size: 2em;
  color: #25A9E0;
`;

const MyTableContainer = styled(TableContainer)`
  position: absolute;
  width: 100%;
  height: 80%;
  top: 20%;
`;

const MyTableHead = styled(TableHead)`
  height: 0.5em;
  width: calc(100%/lenght(competitors));
`;

const MyTableCell = styled(TableCell)`
  height: 0.5em;
  width: calc(100%/lenght(competitors));
`;

function CompetitorsAndAlternatives({ title, massive, competitors, properties }) {
    console.log(competitors)
  return (
    <SlideBox>
      <Title>{title}</Title>
      <MyTableContainer component={Paper}>
        <Table sx={{ maxWidth: 350 }} aria-label="simple table">
          <MyTableHead>
            <TableRow>
              <MyTableCell />
              {competitors.map((competitor) => <MyTableCell key={competitor.id}>{competitor.name}</MyTableCell>)}
            </TableRow>
          </MyTableHead>
          <TableBody>
            {properties.map((row, index) => (
              <TableRow
                key={row}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <MyTableCell>{row}</MyTableCell>
                {massive[index].map((data) => <MyTableCell key={data.key}>{data.flag.toString()}</MyTableCell>)}
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </MyTableContainer>
    </SlideBox>
  )
}

CompetitorsAndAlternatives.propTypes = {
  title: PropTypes.string,
  massive: PropTypes.array,
  competitors: PropTypes.array,
  properties: PropTypes.array
}

CompetitorsAndAlternatives.defaultProps = {
  title: 'Бизнес-модель',
  competitors: [
    {id: 1, name: 'Онлайн редакторы'},
    {id: 2, name: 'Онлайн редакторы 2'},
    {id: 3, name: 'Онлайн редакторы 3'},
  ],
  properties: [
    "cal1",
    "cal2",
    "cal3"
  ],
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

export default CompetitorsAndAlternatives;