import React from 'react'
import './Topbar.css'
import { NotificationsNone,Language,Settings } from '@material-ui/icons';
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
<div className='topLeft'>
<span className='logo'>
Fahad
</span>
</div>
<div className='topRight'>
<div className='topIconContainer'>
<NotificationsNone/>
<span className='topIconBadge'>2</span>
</div>
<div className='topIconContainer'>
<Language/>
<span className='topIconBadge'>2</span>
</div>
<div className='topIconContainer'>
<Settings/>
<span className='topIconBadge'>2</span>
</div>
</div>
      </div>
    </div>
  )
}
