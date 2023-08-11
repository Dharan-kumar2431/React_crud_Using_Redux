import { Link, useParams } from "react-router-dom";
import "./Edituser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserData } from "../Redux_component/slice/slice";


const Edituser = () => {

 
const dispatch = useDispatch()
  const {id} = useParams();
  console.log(id)

  const editedDataFromSelector = useSelector((data)=>{
    return data
  })
  
  const editedData = editedDataFromSelector.data.editData;

  useEffect(()=>{
    dispatch(editUserData(id))

    if(editedData){
      console.log("editedData===>++",editedData)
      formik.setValues({
        name: editedData.name,
        email: editedData.email,
        password: editedData.password,
        about:editedData.about
      })   
     }
  },[dispatch,id])

  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      about:"",
    },
    onSubmit:(values)=>{
      
    }
  })
  return (
    <div>
      <div className="d-flex userdataheading justify-content-center align-items-center">
        <section>
          <h2 className="text-center my-4">Edit User</h2>
        </section>
        <section className="position-absolute top-2 start-0 p-3">
          <Link to={"../"}>
            <button className="btn btn-primary backbtn"><FontAwesomeIcon icon={faArrowLeft} className="text-white"/> Back</button>
          </Link>
        </section>
      </div>

      <div className="editForm">
        <form onSubmit={formik.handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">
                User Name<small className="text-danger"> *</small>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email<small className="text-danger"> *</small>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password<small className="text-danger"> *</small>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="about">About Your Interest</label>
              <input
                type="text"
                className="form-control"
                name="about"
                placeholder="About You"
                value={formik.values.about}
                onChange={formik.handleChange}

              />
            </div>
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
        </form>
      </div>
    </div>
  );
};

export default Edituser;
