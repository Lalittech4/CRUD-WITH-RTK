import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreatUser } from "../slice/userDetailsSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setuser] = useState({});

  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const getinputval = (e) => {
    setuser({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    Dispatch(CreatUser(users));
    navigate("/Read");
  };

  return (
    <div>
      <h2 className="d-flex justify-content-center mt-2">ENTER DETAILS </h2>
      <form
        className="w-50 mx-auto d-flex flex-column align-items-center my-4"
        onSubmit={handlesubmit}
      >
        <div className="mb-3 d-flex flex-column align-items-center w-100">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getinputval}
            placeholder="Enter Name Here"
          />
        </div>
        <div className="mb-3 d-flex flex-column align-items-center w-100">
          <label className="form-label">EMAIL</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getinputval}
            placeholder="Enter Email Here"
          />
        </div>
        <div className="mb-3 d-flex flex-column align-items-center w-100">
          <label className="form-label">AGE</label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={getinputval}
            placeholder="Enter Age Here"
          />
        </div>
        <input className="my-2" type="checkbox" name="gender" value="Male"  onChange={getinputval}/>
        <label className="form-label">MALE</label>

        <input className="my-2" type="checkbox" name="gender" value='Female'  onChange={getinputval} />
        <label className="form-label">FEMALE</label>

        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Create;
