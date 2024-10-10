"use client";

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../layout-components/NavBar'
import '../layout.scss'
import Hero from '../layout-components/About/Hero';
import OurStory from '../layout-components/About/OurStory';
import Grid from '../layout-components/About/Grid';
import Culture from '../layout-components/About/Culture';
import Testimonials from '../layout-components/About/Testimonials';

const AboutPage = () => {
  return (
    <div>
       <div className="layout">
        <div className="navbar">
          <Navbar />
          <Hero/>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <OurStory/>
      <Grid/>
      <Culture/>
      <Testimonials/>
    </div>
  )
}

export default AboutPage
