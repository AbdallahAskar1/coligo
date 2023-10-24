
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CarRentalIcon from '@mui/icons-material/CarRental';
import MapIcon from '@mui/icons-material/Map';
import Logo from '../../../src/assets/logo.png'
import { Announcement, Book, CalendarViewMonth, Dashboard, GolfCourseSharp, Grade, Home, InsertChartRounded, Schedule } from '@mui/icons-material';
function SidebarItem({ isActive, href, icon, label }) {
  const IconComponent = {
    dashboard: Home,
    schedule: CalendarViewMonth,
    courses: Book,
    grade: Grade,
    performance: InsertChartRounded,
    announcement:Announcement,
  }[icon];

  return (
    <li className={`side-nav__item ${isActive ? 'side-nav__item--active' : ''}`}>
      <a href={href} className="side-nav__link">
        <IconComponent className="side-nav__icon" />
        <span>{label}</span>
      </a>
    </li>
  )
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <h1 className='sidebar-logo'>Coligo</h1>
        <SidebarItem isActive={true} href="#" icon="dashboard" label="Dashboard" />
        <SidebarItem href="#" icon="schedule" label="Schedule" />
        <SidebarItem href="#" icon="courses" label="Courses" />
        <SidebarItem href="#" icon="grade" label="grade" />
        <SidebarItem href='#' icon='performance' label='performance' />
        <SidebarItem href='#' icon='announcement' label='announcement' />
      </ul>
    </nav>
  )
}

export default Sidebar;
