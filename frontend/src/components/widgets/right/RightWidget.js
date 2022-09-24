import React from 'react'
import './right.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(customer, service,  amount, date, plan) {
  return { customer, service, amount, date, plan };
}

const rows = [
  createData('Geoffrey', "Zumba", 2100, "12th Septmber 2022", "Weekly"),
  createData('Grace', "Yoga", 1500, "12th Septmber 2022", "Weekly"),
  createData('John', "Taekwondo", 300, "12th Septmber 2022", "Daily"),
  createData('Elfin', "Aerobics", 300, "12th Septmber 2022", "Daily"),
  createData('Wafula', "Taekwondo", 300, "12th Septmber 2022", "Daily"),
];

function RightWidget() {
  return (
    <div className='right'>
        <h5 className='title'>Latest Transactions</h5>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
            <StyledTableCell>Customer</StyledTableCell>
            <StyledTableCell align="right">Service</StyledTableCell>
            <StyledTableCell align="right">Amount&nbsp;(ksh)</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Plan</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.customer}>
              <StyledTableCell component="th" scope="row">
                {row.customer}
              </StyledTableCell>
              <StyledTableCell align="right">{row.service}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.plan}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default RightWidget