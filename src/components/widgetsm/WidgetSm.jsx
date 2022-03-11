import React from 'react'
import './WidgetSm.css'
import { Visibility } from '@material-ui/icons';
function WidgetSm({data, uname, utitle}) {
  return (
    <div className='WidgetSm'>
    <span className='widgetSmTitle'>New Join Memeber</span>
    <ul className='WidgetSmList'>
      <ListItem name="Fahad" title="SE" image='https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4'/>
      <ListItem name="Fahad" title="SE" image='https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4'/>
      <ListItem name="Fahad" title="SE" image='https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4'/>
      <ListItem name="Fahad" title="SE" image='https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4'/>
      <ListItem name="Fahad" title="SE" image='https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4'/>
      <ListItem name="Fahad" title="SE" image='https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4'/>
      <ListItem name="Fahad" title="SE" image='https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4'/>
    </ul>

    </div>
  )
}


export function ListItem({name, title,image}) {
  return (
    <div>
<li className='WidgetSmListItem'>
       <img src={image}  alt='user' className='widgetSmImg'/>
      <div className='widgetSmUser'>
<span className='widgetUserName'>{name}</span>
<span className='widgetUserJob'>{title}</span>
      </div>
      <button className='widgetSmButton'>
<Visibility className='widgetSmIcon'/>
Display
      </button>
      </li>
    </div>
  )
}

export default WidgetSm
