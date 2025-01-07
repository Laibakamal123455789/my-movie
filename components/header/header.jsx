import React from 'react'
import "./header.css"
import Link from 'next/link';

export default function Header() {
 return (
  <div> 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" href="#">
      Navbar
    </Link>
    <ul className="navbar-nav mr-auto">
  
  <li className="nav-item">
    <Link className="nav-link" href="/signup">
     SignUp
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/login">
      Login
    </Link>
  </li>
  {/* <li className="nav-item">
    <Link className="nav-link" href="/user">
    Users
    </Link>
  </li> */}
</ul>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* Navbar items on the left */}
      <ul className="navbar-nav mr-auto">
        {/* Add nav items here if needed */}
      </ul>
      {/* Search form aligned to the right */}
      <form className="form-inline search-form ml-auto">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</div>

);

}
