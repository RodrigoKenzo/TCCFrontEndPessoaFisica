import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText, navRight } from './header.module.scss'

const Header = ({ pageTitle, pageHeading, children }) => {
  return (
    <main className={container}>
        <title>{pageTitle}</title>
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link className={navLinkText} to="/">FAEC</Link></li>
                <li className={navRight}><Link className={navLinkText} to="/register">Login</Link></li>
            </ul>
        </nav>
        <h1 className={heading}>{pageHeading}</h1>
        {children}
    </main>
  )
}

export default Header