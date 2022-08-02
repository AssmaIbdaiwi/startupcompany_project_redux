import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";

const Login = () => {
    let navigate = useNavigate();
    const user = useSelector((state) => state.user.isLogged);
    
  const [userData, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();


  function handelSubmet(e) {
    e.preventDefault();


    console.log(userData);



    axios.post(`http://127.0.0.1:8000/api/login`, { ...userData })
    .then(res => {
      console.log(user);
      console.log(res.data);
      dispatch(login(res.data.name));
      localStorage.setItem("id", res.data.id);
      
 
    })

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
