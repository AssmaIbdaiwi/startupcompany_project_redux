
import React,{useState} from "react";
import { Link } from "react-router-dom";

const Sign_up =()=>{

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirm_password, setconfirm_password] = useState("");


    function login(e) {
        e.preventDefault();
    
        // const { Email_status, pass__status, check } = Usedata(email, password);
        axios({
          method: "post",
          url: "https://62c52d60a361f725127c1c74.mockapi.io/users",
          data: {
            name: name,
            email: email,
            password: password,
          },
        });
      }


















        return(

  <>
       <section class="login-area ptb-100">
            <div class="container">
                <div class="login-form">
                    <h2>Sign Up</h2>

                    <form>
                        <div class="form-group">
                            {/* <label>Username</label> */}
                            <input type="text" class="form-control" placeholder="Username"/>
                        </div>

                        <div class="form-group">
                            {/* <label>Email or phone</label> */}
                            <input type="text" class="form-control" placeholder="Email"/>
                        </div>

                        <div class="form-group">
                            {/* <label>Password</label> */}
                            <input type="text" class="form-control" placeholder="Password"/>
                        </div>

                        <div class="form-group">
                            {/* <label>Password</label> */}
                            <input type="text" class="form-control" placeholder="Confirm Password"/>
                        </div>

                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="checkme"/>
                                    <label class="form-check-label" for="checkme">Remember me</label>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                                <a href="#" class="lost-your-password">Forgot your password?</a>
                            </div>
                        </div>

                        <button type="submit">Login</button>
                    </form>

                    <div class="important-text">
                        <p>Already have account?  <Link to ="/Login"><a href="register.html">Login now!</a></Link></p>
                    </div>
                </div>
            </div>
        </section>
    </>
    );};
    export default Sign_up;