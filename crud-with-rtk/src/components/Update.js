import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../slice/userDetailsSlice";

const Update = () => {
  const { id } = useParams();
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData, setupdateData] = useState();

  const allusers = useSelector((state) => state.app.users);

  useEffect(() => {
    const singleuser = allusers.filter((ele) => ele.id === id);
    // console.log(singleuser);
    setupdateData(singleuser[0]);
  }, []);

  const newData =(e)=>{
    setupdateData({...updateData,[e.target.name]:e.target.value})
  }
  console.log(updateData);
  const handleUpdate =(e)=>{
    e.preventDefault();
    Dispatch(updateUser(updateData));
    navigate('/read')
   
  }


  return (
    <>
      <div>
        <h2 className="d-flex justify-content-center mt-2">
          UPDATE THE DETAILS{" "}
        </h2>
        <form
          className="w-50 mx-auto d-flex flex-column align-items-center my-4"
          onSubmit={handleUpdate}
        >
          <div className="mb-3 d-flex flex-column align-items-center w-100">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={updateData && updateData.name}
              onChange={newData}
              placeholder="Enter Name Here"
            />
          </div>
          <div className="mb-3 d-flex flex-column align-items-center w-100">
            <label className="form-label">EMAIL</label>
            <input
              type="email"
              name="email"
              value={updateData && updateData.email}
              className="form-control"
              onChange={newData}
              placeholder="Enter Email Here"
            />
          </div>
          <div className="mb-3 d-flex flex-column align-items-center w-100">
            <label className="form-label">AGE</label>
            <input
              type="number"
              name="age"
              value={updateData && updateData.age}
              className="form-control"
              onChange={newData}
              placeholder="Enter Age Here"
            />
          </div>
          <input
            className="my-2"
            type="checkbox"
            name="gender"
            value="Male"
            checked={updateData && updateData.gender === "Male"}
             onChange={newData}
          />
          <label className="form-label">MALE</label>

          <input
            className="my-2"
            type="checkbox"
            name="gender"
            value="Female"
            checked={updateData && updateData.gender === "Female"}
             onChange={newData}
          />
          <label className="form-label">FEMALE</label>

          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
