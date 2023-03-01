import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { Usenamedata } from "../App";

export default function Navbar(props) {
  
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container my-3">
          <Link class="navbar-brand  " to="/" style={{ color: "black" }}>
            Krushi Seva
          </Link>

          <div className=" phone_mode_iconss">
              


            <li class="nav-item">

              <i
                class="fas fa-phone-square-alt"
                style={{}}
              >
              </i>
              

            </li>
            <li class="nav-item mx-2">
            <h6>9082334884</h6>
            </li>

          </div>

          <button
            class="navbar-toggler text-black"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto text-center my-0  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/" style={{ color: "black" }}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About" style={{ color: "black" }}>
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Contact" style={{ color: "black" }}>
                  Contact
                </Link>
              </li>

                <li class="nav-item">
                <Link class="nav-link" to="/Blog" style={{ color: "black" }}>
                  Client
                </Link>
              </li>
            
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
}
