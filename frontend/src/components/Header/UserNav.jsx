import React from 'react'
import NotificationIcon from "@mui/icons-material/Notifications"
import MailOutlineIcon from '@mui/icons-material/Mail'
import userImg from '../../../src/assets/user.jpeg'
import Search from './Search'
export default function UserNav() {
  return (
    

    <div className="user-nav">
     
    <div className="user-nav__icon-box">
      <NotificationIcon style={{
        width:'2.4rem',
        height:'2.4rem',
        color:'#4F939E'
      }}/>
      <span className="user-nav__notfication">7</span>
    </div>
    <div className="user-nav__icon-box">
     <MailOutlineIcon className='user-nav__icon'/>
      <span className="user-nav__notfication">5</span>
    </div>
    <div className="user-nav__user">
      <img
        src={userImg}
        alt="user photo"
        className="user-nav__user-photo"
        />
      <span className="user-nav__user-name">abdallah</span>
    </div>
  </div>
  )
}
