import React from 'react'
import './NewUser.css'

function NewUser() {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'> 
<div className='newUserItem'>
  <label>Username</label>
  <input type='text' placeholder='Fahad'/>
</div>
        </form>
    </div>
  )
}

export default NewUser