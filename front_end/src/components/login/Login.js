import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";

const Login = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.isLogged);

  const [userData, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const [all, setall] = useState("");

  function handelSubmet(e) {
    e.preventDefault();
    setall("");

    if (userData.email != "" && userData.password != "") {
      axios
        .post(`http://127.0.0.1:8000/api/login`, { ...userData })
        .then((res) => {
          localStorage.setItem("id", res.data.id);
          console.log(res.status);
          console.log(res.data);
          console.log(res.data.id);


          localStorage.setItem("id", res.data.id);
          if (res.data.id > 0 && res.data.id < 100) {
            dispatch(login(userData));
          }
          else{
            Swal.fire({
              title: "Login Faild",
              text: "incorrect Email or Password",
              type: "Faild",
              confirmButtonColor: "#ea512e",
            });
          }
        });
    } else {
      setall(
        <h5 style={{ color: "red", textAlign: "center" }}>
          {" "}
          *** you have to fill all fields ***
        </h5>
      );
    }

    // console.log(user);

    // } else {
    //   Swal.fire({
    //     title: "Login Faild",
    //     text: "Email or Password are unvalid ",
    //     //type: "success"
    //   });
    // }
  }

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [user]);

  return (
    <>
      <section class="login-area ptb-100">
        <div class="container">
          <div class="login-form">
            <h2>Login</h2>

            <form onSubmit={handelSubmet}>
              <div class="form-group">
                {/* <label>Email or phone</label> */}
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
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
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
              </div>
              {all}
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

              <button type="submit">Login</button>
            </form>

            <div class="important-text">
              <p>
                Don't have an account?{" "}
                <Link to="/Sign_Up">
                  <a href="register.html">Register now!</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
