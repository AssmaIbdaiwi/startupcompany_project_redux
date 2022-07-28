
import React from "react";

const Profile =()=>{
        return(

  <>



        <div class="page-banner-area item-bg3">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-banner-content">
                            <h2>How to Apply</h2>
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>How to Apply</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Page Banner -->

        <!-- Start Apply Area --> */}
        <section class="apply-area ptb-100">
            <div class="container">
                <div class="apply-form">
                    <form>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="content">
                                    <h3>Parent Details</h3>
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name"/>
                                </div>
        
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Email Address"/>
                                </div>
        
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Phone Number"/>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="content">
                                    <h3>Child Details</h3>
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Name"/>
                                </div>
        
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Email Address"/>
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Age"/>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" placeholder="Write Something"></textarea>
                        </div>
                        
                        <button type="submit" class="default-btn">
                            Submit Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
       </>
       );
       };
       export default Profile;