import { Link, useNavigate } from "react-router-dom";
import "./CreateUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useFormik} from 'formik'
import { useDispatch } from "react-redux";
import { createUserData } from "../Redux_component/slice/slice";


const Createuser = () => {
    const url = "http://localhost:4321/user";
    const dispatch = useDispatch();
    const navagation = useNavigate()
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            repassword:"",
            about:"",
        },
        onSubmit: (values) => {
             dispatch(createUserData(values,url))
             navagation('../')
        },
    })
  return (
    <div>
      <div className="d-flex userdataheading justify-content-center align-items-center">
        <section>
          <h2 className="text-center my-4">Create User</h2>
        </section>
        <section className="position-absolute top-2 start-0 p-3">
          <Link to={"../"}>
            <button className="btn btn-primary backbtn"><FontAwesomeIcon icon={faArrowLeft} className="text-white"/> Back</button>
          </Link>
        </section>
      </div>

      <div className="createForm">
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
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="repassword">
                Re-Password<small className="text-danger"> *</small>
              </label>
              <input
                type="password"
                className="form-control"
                name="repassword"
                placeholder="Re-Password"
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
                onChange={formik.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
        </form>
      </div>
    </div>
  );
};

export default Createuser;
