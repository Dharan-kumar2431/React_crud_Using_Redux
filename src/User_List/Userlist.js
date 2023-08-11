import "./Userlist.css";
import Userimg from "../Assects/img_avatar1.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faTrash,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Redux_component/slice/slice";
import { useEffect } from "react";

const Userlist = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
  },[])

  const userData = useSelector((state) => state.data.userData); 
  console.log(userData)
  // const state = useSelector((data) => {
  //   return data.slice;
  // }); 



  // const userDatas = state.userData;
  // console.log("userData@@==>", userDatas);

  const deleteUsersData = (id) =>{
    dispatch(deleteUser(id));
  }

  return (
    <div>
      <div className="d-flex userdataheading justify-content-center align-items-center">
        <section>
          <h2 className="text-center my-4">User Data</h2>
        </section>
        <section className="position-absolute top-2 end-0 p-3 px-5">
          <Link to={"./createuser"}>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faUserPlus} className="text-info" /> Create
              User
            </button>
          </Link>
        </section>
      </div>
      <div className="container userdatacards">
      {userData.map((values, index) => (
          <div className="card text-center userCard" key={values._id}>
            <img src={Userimg} className="userProfile" alt="no image" />
            <div className="card-body">
              <h5 className="card-title username">{values.name}</h5>
              <small>{values.email}</small>
              <p className="card-text my-3">
                {values.about}
              </p>

              <div className="d-flex userActionsBut">
                <section>
                  <Link to={`/edituser/${values._id}`}>
                    <button className="btn btn-primary editAction">
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="text-info"
                      />
                      Edit
                    </button>
                  </Link>
                </section>
                <section>
                  <button className="btn btn-primary deleteAction" onClick={()=>deleteUsersData(values._id)}>
                    <FontAwesomeIcon icon={faTrash} className="text-info" />{" "}
                    Delete
                  </button>
                </section>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlist;
