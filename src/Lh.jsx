//project1

import React, { useState } from "react";

const Lh = () => {
  const [data, setData] = useState({
    loginId: "",
    password: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`You have Login Successfully.`);
  };

  return (
    <>
      <div className="my-3">
        <h1 className="fire">Login Here</h1>
      </div>
      <div className="container contact_div">
        <div className="row ">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Login Id :
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="loginId"
                  value={data.loginId}
                  onChange={InputEvent}
                  placeholder="Login Id"
                />
              </div>

              <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  placeholder="Password"
                />
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lh;
