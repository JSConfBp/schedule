import React, { useState } from 'react'
import classnames from 'classnames'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VenueMap from '../components/VenueMap'

import './index.scss'

const ContactPage = (props) => {
  return (
    <>
      <svg
        className="triangle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 262 830"
      >
        <path d="M262 830L1 0h261.8l-.8 830z" />
      </svg>
      <Header />
      <main className="site_content">
        <div className="content contacts">
          <h2>Contact</h2>
          <p>
            In person:
            <br />
            find any team member at the venue in bright gold t-shirts
          </p>
          <p>
            Email: <br />
            <a href="mailto:team@jsconfbp.com">team@jsconfbp.com</a>
          </p>
          <p>
            Our DM's on Twitter are always open:
            <br />
            <a href="https://twitter.com/jsconfbp">@jsconfbp</a>
          </p>
          <p>
            In case of an emergency, you can call us on this number <br />
            00 36 70 389 1288
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
