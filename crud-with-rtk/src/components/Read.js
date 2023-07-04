import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser, ReadUser } from "../slice/userDetailsSlice";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Read = () => {
  const [showpopup, setshowpopup] = useState(false);
  // const [searchData, setsearchDa  ta] = useState('');
  const [id, setid] = useState();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);


  useEffect(() => {
    dispatch(ReadUser());
  }, []);

  return (
    <>
      {showpopup && <Modal  id={id} setshowpopup={setshowpopup} />}

      <p className="w-50 mx-auto d-flex justify-content-center mt-2 ">
        ALL POSTS
      </p>
 
      {users &&
        users.map((item) => (
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
                      onClick={()=>dispatch(DeleteUser(item.id))}
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
