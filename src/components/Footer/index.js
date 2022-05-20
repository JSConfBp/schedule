import React from 'react'
import { Link } from 'gatsby'
export default () => (
  <footer className="site_footer">
    <nav className="site_footer_nav">
      <ul className="site_footer_nav_list">
        <li className="site_footer_nav_list_item">
          <Link className="site_footer_nav_list_item_link" to="/map">
            Map
          </Link>
        </li>
        <li className="site_footer_nav_list_item">
          <Link className="site_footer_nav_list_item_link" to="/">
            Schedule
          </Link>
        </li>
        <li className="site_footer_nav_list_item">
          <Link className="site_footer_nav_list_item_link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
)
