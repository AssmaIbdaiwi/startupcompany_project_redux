import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'



const Profile =()=>{


    let id = localStorage.getItem('id');



        //view user info
        const [data, setData] = useState({});




        const fetchProfile = async () => {

            
            const response = await fetch(`http://127.0.0.1:8000/api/get/${id}`)
            const myProfile = await response.json();
    
            setData(myProfile);

            // console.log("#############################")
            console.log(myProfile)
    
        }

        console.log("*************************************");
        console.log(data);

        useEffect(() => {
            fetchProfile();
        }
            , []);






        return(

  <>



        <div class="page-banner-area item-bg3">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-banner-content">
                            {/* <h2>How to Apply</h2>
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>How to Apply</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Page Banner -->

        <!-- Start Apply Area --> */}
        <section class="apply-area ptb-100">
        
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="quote-image"></div>
                    </div>

                    <div class="col-lg-6">
                        <div class="quote-item">
                            <div class="content">
                                <span>Get a Quote</span>
                                <h3>Online Class Registration</h3>
                            </div>

                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Full Name"   value={data.name}/>
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Email" value={data.email}/>
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Phone Number" value={data.mobile}/>
                                </div>

                                
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="password" value={data.password}/>
                                </div>
                                
                                <button type="submit" class="default-btn">
                                    UPDATE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
     
        </section>
       </>
       );
       };
       export default Profile;