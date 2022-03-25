import React,{useState} from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../Data";
import { Link } from "react-router-dom";
import './ProductList.css'
function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
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