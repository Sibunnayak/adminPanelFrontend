import axios from "axios";
import { useEffect, useState } from "react";

// function College () {
// const [colleges, setColleges] = useState([])

// useEffect(() => {
//     axios.get('http://localhost:3001')
//     .then(result => 
//         setColleges(result.data)
//     )
//     .catch(err => console.log(err))
// },[])


//     return (
//         <div className="d-flex vh-100 justify-content-center align-items-center">
//             <div className=" bg white rounded p-3 vh-100">
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Fees</th>
//                             <th>Placement</th>
//                             <th>Review</th>
//                             <th>Rank</th>
//                             {/* <th>Action</th> */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             colleges.map((college) =>{
//                                return <tr>
//                                     <td>{college.Id}</td>
//                                     <td>{college.Name}</td>
//                                     <td>{college.Fees}</td>
//                                     <td>{college.Placement}</td>
//                                     <td>{college.Review}</td>
//                                     <td>{college.Rank}</td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </div>
            
//         </div>
//     )

// }

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'Id', label: 'S.N', minWidth: 150 },
  { id: 'Name', label: 'College Name', minWidth: 170 },
  {
    id: 'Fees',
    label: 'Fees',
    // minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Placement',
    label: 'Placement Percentage',
    // minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Review',
    label: 'Review',
    // minWidth: 150,
    align: 'right',
    format: (value) => value.toFixed(1),
  },
  {
    id: 'Rank',
    label: 'Ranking',
    // minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

 function College() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [colleges, setColleges] = useState([])

useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result => 
        setColleges(result.data)
    )
    .catch(err => console.log(err))
},[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className="mx-center max-w-7xl mb-2 px-4 sm:px-6 lg:px-8">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {colleges
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={colleges.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


export default College;