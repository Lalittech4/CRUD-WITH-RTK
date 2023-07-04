import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Searchuser } from "../slice/userDetailsSlice";

const Navbar = () => {
  const [searchData, setsearchData] = useState("");
  const { users } = useSelector((state) => state.app);
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(Searchuser(searchData));
  }, [searchData]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand">CRUD WITH RTK</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Read">
                All posts ({users.length})
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => 
                setsearchData(e.target.value)
              }
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
