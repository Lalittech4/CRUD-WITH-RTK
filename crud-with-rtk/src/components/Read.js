import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser, ReadUser } from "../slice/userDetailsSlice";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Read = () => {
  const [showpopup, setshowpopup] = useState(false);
  const [radiodata, setradiodata] = useState("");
  const [id, setid] = useState();
  const dispatch = useDispatch();
  const { users, SearchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(ReadUser());
  }, []);

  return (
    <>
      {showpopup && <Modal id={id} setshowpopup={setshowpopup} />}
        <p className="w-50 mx-auto d-flex justify-content-center mt-2 ">
          ALL POSTS
        </p>
      <div className="d-flex justify-content-center align-items-center flex-row mx-2">
        <input
          className="form-check-input"
          // name="gender"
          type="radio"
          checked={radiodata === ""}
          onChange={(e) => setradiodata("")}
        />
        <label className="form-check-label me-2">All</label>
        <input
          className="form-check-input"
          // name="gender"
          value="Male"
          type="radio"
          checked={radiodata === "Male"}
          onChange={(e) => setradiodata(e.target.value)}
        />
        <label className="form-check-label me-2">Male</label>
        <input
          className="form-check-input"
          // name="gender"
          value="Female"
          type="radio"
          checked={radiodata === "Female"}
          onChange={(e) => setradiodata(e.target.value)}
        />
        <label className="form-check-label me-2">FEMALE</label>
      </div>

      {users &&
        users
          .filter((ele) => {
            if (SearchData.length === 0) {
              return ele;
            } else {
              return (
                ele.name.toLowerCase().includes(SearchData.toLowerCase()) ||
                ele.email.toLowerCase().includes(SearchData.toLowerCase())
              );
            }
          })
          .filter((ele) => {
            if (radiodata === "Male") {
              return ele.gender === radiodata;
            } else if (radiodata === "Female") {
              return ele.gender === radiodata;
            } else {
              return ele;
            }
          })
          .map((item) => (
            <li className="list-unstyled" key={item.id}>
              <div className="d-flex justify-content-center  my-2">
                <div className="card bg-light w-50 d-flex justify-content-center align-items-center">
                  <div className="card-body d-flex justify-content-center align-items-center flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.email}</p>
                    <p className="card-text">{item.gender}</p>
                    <div className=" d-flex justify-content-center ">
                      <Link
                        className="card-link text-decoration-none text-primary"
                        onClick={() => [setid(item.id), setshowpopup(true)]}
                      >
                        View
                      </Link>
                      <Link
                        to={`/edit/${item.id}`}
                        className="card-link text-decoration-none text-success"
                      >
                        Update
                      </Link>
                      <Link
                        onClick={() => dispatch(DeleteUser(item.id))}
                        className="card-link text-decoration-none text-danger"
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
    </>
  );
};

export default Read;
