import React from 'react'
import './NewProduct.css'
function NewProduct() {
  return (
    <div className='newProduct'>
    <h1 className="addProductTitle">New Product</h1>
    <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        
        </form>
    </div>
  )
}

export default NewProduct