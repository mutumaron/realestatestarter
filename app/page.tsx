"use client";

import React from "react";
import Properties from "./layout-components/Home/Properties";
import CityProperties from "./layout-components/Home/CityProperties";
import "react-multi-carousel/lib/styles.css";
import Navbar from "./layout-components/NavBar";
import Hero from "./layout-components/Home/Hero";
import { Outlet } from "react-router-dom";
import "./layout.scss";

const HomePage = () => {
  return (
    <div>
      <div className="layout">
        <div className="navbar">
          <Navbar />
          <Hero />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      {/* <Navbar /> */}

      <Properties />
      <CityProperties />
    </div>
  );
};

export default HomePage;
