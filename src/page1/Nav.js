import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        {/* first way */}
        {/* <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/blog'>Blog</a>
        <a href='/contact'>Contact</a> */}
{/* 
       <nav>
           <Link to='/'>Home</Link>
           <Link to='/about'>about</Link>
           <Link to='/contact'>contact</Link>
           <Link to='/blog'>blog</Link>
           
        </nav>  */}
        <nav>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/about'>about</NavLink>
           <NavLink to='/contact'>contact</NavLink>
           <NavLink to='/blog'>blog</NavLink>
           
        </nav> 
    </div>
  )
}

export default Nav