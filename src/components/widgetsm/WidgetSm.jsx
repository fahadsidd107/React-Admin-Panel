import React from 'react'
import './WidgetSm.css'
import { Visibility } from '@material-ui/icons';
function WidgetSm() {
  return (
    <div className='WidgetSm'>
    <span className='widgetSmallTitle'>New Join Memeber</span>
    <ul className='WidgetSmList'>
      <li className='WidgetSmListItem'>
       <img src='https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4'  alt='user' className='widgetSmImg'/>
      <div className='widgetSmUser'>
<span className='widgetUserName'>Muhammad Fahad Siddiqui</span>
<span className='widgetUserJob'>Software</span>
      </div>
      <button className='widgetSmButton'>
<Visibility/>
      </button>
      </li>
    </ul>

    </div>
  )
}

export default WidgetSm