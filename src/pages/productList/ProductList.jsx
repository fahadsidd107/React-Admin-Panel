import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../Data.js";
import { Link } from "react-router-dom";
import './ProductList.css'
function ProductList() {
  return (
    <div className='productList'>
            <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
    </div>
  )
}

export default ProductList