import React from 'react'
import './NewUser.css'

function NewUser() {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'> 
<Form label='User Name' placeholder='Fahad'/>
<Form label='Full Name' placeholder='Fahad Siddiqui'/>
<Form label='username' placeholder='Fahad'/>
<Form label='username' placeholder='Fahad'/>
<Form label='username' placeholder='Fahad'/>
<Form label='username' placeholder='Fahad'/>
        </form>
    </div>
  )
}



export function Form({label , placeholder }) {
  return (
    <div className='newUserItem'>
      <label>{label}</label>
      <input type='text' placeholder={placeholder}/>
    </div>
  )
}



export default NewUser