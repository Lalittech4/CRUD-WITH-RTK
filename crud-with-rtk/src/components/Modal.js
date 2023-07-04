import React from "react";
import "./customModal.css";
import { useSelector } from "react-redux";
const Modal = ({ setshowpopup, id }) => {
  const users = useSelector((state) => state.app.users);
  const singleuser = users.filter((ele) => ele.id === id);
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <h2 className="mb-3">USER DETAIL</h2>
          <p> Name : {singleuser[0].name}</p>
          <p>Email : {singleuser[0].email}</p>
          <p>Gender : {singleuser[0].gender}</p>
          <p>Age : {singleuser[0].age}</p>
          <button className="btn btn-outline-secondary" onClick={() => setshowpopup(false)}>CLOSE</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
