import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sign_up = () => {
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [confirm_password, setconfirm_password] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  function sign(e) {
    e.preventDefault();

    console.log(user);

    //   axios({
    //   method: "post",
    //   url: "http://127.0.0.1:8000/api/register",
    //   data: user,
    //   responseType: "stream"
    // });


   
    let data = JSON.stringify({ user });
      
      const response = axios.put("http://127.0.0.1:8000/api/register",data,{headers:{"Content-Type" : "application/json"}});


    // axios({
    //   method: "get",
    //   url: "http://127.0.0.1:8000/api/users",
    //   responseType: "stream",
    // }).then(function (response) {
    //   console.log(response.data);
    // });
   }








  return (
    <>
      <section class="login-area ptb-100">
        <div class="container">
          <div class="login-form">
            <h2>Sign Up</h2>

            <form onSubmit={sign}>
              <div class="form-group">
                {/* <label>Username</label> */}
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  // value={name}
                  // onChange={(e) => setname(e.target.value)}/>

                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>

              <div class="form-group">
                {/* <label>Email or phone</label> */}
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  // value={email}
                  //  onChange={(e) => setemail(e.target.value)}/>

                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>

              <div class="form-group">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  //   value={password}
                  //   onChange={(e) => setpassword(e.target.value)}/>

                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, pass: e.target.value }))
                  }
                />
              </div>

              <div class="form-group">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  //   value={confirm_password}
                  //   onChange={(e) => setconfirm_password(e.target.value)}
                />
              </div>

              <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkme"
                    />
                    <label class="form-check-label" for="checkme">
                      Remember me
                    </label>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                  <a href="#" class="lost-your-password">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button type="submit" onClick={sign}>
                Sign Up
              </button>
            </form>

            <div class="important-text">
              <p>
                Already have account?{" "}
                <Link to="/Login">
                  <a href="register.html">Login now!</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Sign_up;
