import React, { useState } from 'react'
import classnames from 'classnames'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VenueMap from '../components/VenueMap'

import './index.scss'

const MapPage = (props) => {
  return (
    <>
      <main className="site_content">
        <VenueMap />
      </main>
      <Footer />
    </>
  )
}

export default MapPage
