import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/userSlice";
import { addUser } from "../../redux/userLoginSlice";
import axios from "axios";

const Sign_up = () => {
  const [userData, setUser] = useState({ name: "", email: "", password: "" });
  const [conferm, setconferm] = useState("");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [conferm2, setconferm2] = useState("");

  const [all, setall] = useState("");
  const [done, setdone] = useState(false);


  let navigate = useNavigate();
  const user = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();

  const passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const namePattern = /^[a-z ]+$/gi;
  const emailPattern =/^[a-zA-Z]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/i;

  console.log(userData.name);
  console.log(namePattern.test(userData.name));

  async function handelSubmet(e) {
    e.preventDefault();
    setname("");setemail("");setpass("");setconferm2("");setall("");setdone(false);

    //console.log(namePattern.test(userData.name));

    if (userData.name != "" &&userData.email != "" &&userData.password != "" &&conferm != "" ) 
      {

      if (namePattern.test(userData.name)) {
        setdone(true);
      } else {
        setdone(false);
        setname(<h6 style={{color: "red",textAlign: "center"}} >** undefind name</h6>)
      }

      if (emailPattern.test(userData.email)) {
        setdone(true);
      } else {
        setdone(false);
        setemail(<h6 style={{color: "red",textAlign: "center"}} >** undefind email</h6>)
      }

      if (passPattern.test(userData.password)) {
        setdone(true);
      } else {
        setdone(false);
        setpass(<h6 style={{color: "red",textAlign: "center"}} >** password mush be : <br></br>1- more than 8 character
        <br></br> 2- contain at least one number,character,special character </h6>)
      }

      if (pass == conferm2) {
        setdone(true);
      } else {
        setdone(false);
        setconferm2(<h6 style={{color: "red",textAlign: "center"}} >conferm password mush match password</h6>)
      }



      if(done)
      {
        axios
        .post(`http://127.0.0.1:8000/api/register`, { ...userData })
        .then((res) => {
          console.log(user);
          console.log(res.data);
          dispatch(signup(res.data.name));
          localStorage.setItem("id", res.data.id);
        });
      }
      

    } else {

      setall(<h5 style={{color: "red",textAlign: "center"}}> *** you have to fill all fields ***</h5>);
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    } else {
      navigate("/Sign_Up", { replace: true });
    }
  }, [user]);

  return (
    <>
      <section class="login-area ptb-100">
        <div class="container">
          <div class="login-form">
            <h2>Sign Up</h2>

            <form onSubmit={handelSubmet}>
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
              {name}

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
          {email}
              <div class="form-group">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  //   value={password}
                  //   onChange={(e) => setpassword(e.target.value)}/>

                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
              </div>
             {pass}
              <div class="form-group">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  //   value={confirm_password}
                  onChange={(e) => setconferm(e.target.value)}
                />
              </div>
              {conferm2}
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

              <button type="submit">Sign Up</button>
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
