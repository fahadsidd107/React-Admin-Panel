import React from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'username', headerName: 'Username', width: 160 },
  { field: 'email', headerName: 'E-mail',type:'email' , width: 160 },
  {
    field: 'status',
    headerName: 'Status',
    // type: 'number',
    width: 160,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, username: 'Jon Snow',avatar:"https://pps.whatsapp.net/v/t61.24694-24/234743491_372249084383775_7612602405731643070_n.jpg?ccb=11-4&oh=f06c30ab5033f0dc3b612a1260fa8efd&oe=62353341", email: 'Jon@gmail.com', status: 'Active', transaction: 'Rs.1,000' },
  { id: 2, username: 'Ceriee Lannister',avatar:'', email: 'Cersei@gmail.com', status: 'Active', transaction: 'Rs.2,000' },
  { id: 3, username: 'Jaime Lannister',avatar:'', email: 'Jaime@gmail.com', status: 'Active' , transaction: 'Rs.3,000' },
  { id: 4, username: 'Arya Stark',avatar:'https://pps.whatsapp.net/v/t61.24694-24/248375694_462098252293667_7625572374605281795_n.jpg?ccb=11-4&oh=eb063fab96b927d89704844e5a5eeb74&oe=6235DA3A', email: 'Arya@gmail.com', status: 'Active' , transaction: 'Rs.4,000' },
  { id: 5, username: 'Daenerys Targaryen',avatar:'', email: 'Daenerys@gmail.com', status: 'Active' , transaction: 'Rs.5,000' },
  { id: 6, username: 'Melisandre',avatar:'', email: 'Melisandre@gmail.com', status: 'Active' , transaction: 'Rs.6,000' },
  { id: 7, username: 'Ferrara Clifford',avatar:'', email: 'Ferrara@gmail.com', status: 'Active' , transaction: 'Rs.7,000' },
  { id: 8, username: 'Rossini Frances',avatar:'', email: 'Rossini@gmail.com', status: 'Active', transaction: 'Rs.8,000' },
  { id: 9, username: 'Harvey Roxie',avatar:'', email: 'Harvey@gmail.com', status: 'Active', transaction: 'Rs.9,000' },
];

function UserList() {
  return (
    <div className='userList'>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  )
}

export default UserList