import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAdd } from "../redux/actions";
import { BiArrowBack } from "react-icons/bi";
import Header from "../Components/Header";

function Add() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    // console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (!name || !email || !contact || !address) {
      setError("Please filled all field ");
    } else {
      dispatch(userAdd(state));
      navigate("/");
      setError("");
      // window.reload("")
    }
  };
  return (
    <>
    <Header/>
    <section className="vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#eee" }}>
      <div className=" p-0 m-0">
        <div className="row d-flex justifycontent-center align-items-center ">
          <div className="col-lg-12 col-xl-12 ">
            <div className="card text-black" style={{ borderRadius: "0" }}>
              <div className="card-body  ">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Add user
                    </p>
                    {error && <h5 style={{ color: "red" }}>{error}</h5>}
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            label="name"
                            value={name}
                            name="name"
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example1c">
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            value={email}
                            name="email"
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            id="form3Example4c"
                            className="form-control"
                            name="contact"
                            value={contact}
                            type="number"
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example4c">
                            Contact
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            id="form3Example4cd"
                            className="form-control"
                            name="address"
                            value={address}
                            type="text"
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example4cd">
                            Your adress
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="subMit"
                          className="btn btn-primary btn-lg"
                        >
                          Add User
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Add;
