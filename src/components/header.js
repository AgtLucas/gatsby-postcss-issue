import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className='wrapper'>
      <Link
        to="/"
        className='link'
      >
        {siteTitle}
      </Link>
    </div>
  </header>
)

export default Header
