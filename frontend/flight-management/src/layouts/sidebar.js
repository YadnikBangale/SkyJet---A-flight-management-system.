import React from "react";

import { Link } from "react-router-dom";

import {
  FaPlane,
  FaPlusCircle,
  FaSearchDollar,
  FaRoute,
  FaBuilding
} from "react-icons/fa";

export default function Sidebar() {

  return (

    <div className="sidebar">

      <h1 className="logo">
        SkyJet
      </h1>

      <Link to="/" className="sidebar-link">
        <FaPlane />
        Flights
      </Link>

      <Link to="/add" className="sidebar-link">
        <FaPlusCircle />
        Add Flight
      </Link>

      <Link to="/carrier" className="sidebar-link">
        <FaBuilding />
        Find by Carrier
      </Link>

      <Link to="/route" className="sidebar-link">
        <FaRoute />
        Find by Route
      </Link>

      <Link to="/price" className="sidebar-link">
        <FaSearchDollar />
        Find by Price
      </Link>

    </div>
  );
}