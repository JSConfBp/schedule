import React, { useState } from 'react'
import classnames from 'classnames'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VenueMap from '../components/VenueMap'

import './index.scss'

const MapPage = (props) => {
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
        <VenueMap />
      </main>
      <Footer />
    </>
  )
}

export default MapPage
