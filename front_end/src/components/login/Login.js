
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login =()=>{
        return(

  <>
        <section class="login-area ptb-100">
            <div class="container">
                <div class="login-form">
                    <h2>Login</h2>

                    <form>

                        <div class="form-group">
                            {/* <label>Email or phone</label> */}
                            <input type="text" class="form-control" placeholder="Email"/>
                        </div>

                        <div class="form-group">
                            {/* <label>Password</label> */}
                            <input type="text" class="form-control" placeholder="Password"/>
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
                        <p>Don't have an account?  <Link to ="/Sign_Up"><a href="register.html">Register now!</a></Link></p>
                    </div>
                </div>
            </div>
        </section>
    </>
    );};
    export default Login;