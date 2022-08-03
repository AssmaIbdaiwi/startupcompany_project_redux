import { NavLink } from "react-router-dom"

const Footer =()=>{
    return(
        <>
        
       
        <section class="footer-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                            <div class="logo">
                                <h2>
                                    <a href="index.html">Hello Baby</a>
                                </h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul class="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i class='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class='bx bxl-pinterest-alt'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Contact Us</h3>

                            <ul class="footer-contact-info">
                                <li>
                                    <i class='bx bxs-phone'></i>
                                    <span>Phone</span>
                                    <a href="tel:882569756">882-569-756</a>
                                </li>
                                <li>
                                    <i class='bx bx-envelope'></i>
                                    <span>Email</span>
                                    <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#dbb3beb7b7b49bb0beafbab5f5b8b4b6"><span class="__cf_email__" data-cfemail="88e0ede4e4e7c8e3edfce9e6a6ebe7e5">[email&#160;protected]</span></a>
                                </li>
                                <li>
                                    <i class='bx bx-map'></i>
                                    <span>Address</span>
                                    175 5th Ave Premium Area, New York, NY 10010, United States
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget pl-5">
                            <h3>Activities</h3>
    
                            <ul class="quick-links">
                                <li>
                                    <a href="#">Maths Olympiad</a>
                                </li>
                                <li>
                                    <a href="#">Art Competition</a>
                                </li>
                                <li>
                                    <a href="#">English Novels</a>
                                </li>
                                <li>
                                    <a href="#">Science Competition</a>
                                </li>
                                <li>
                                    <a href="#">Teachers Day</a>
                                </li>
                                <li>
                                    <a href="#">World Kids Day</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Photo Gallery</h3>

                            <ul class="photo-gallery-list">
                                <li>
                                    <div class="box">
                                        <img src="assets/img/footer-gallery/footer-gallery-1.jpg" alt="image"/>
                                        <a href="#" target="_blank" class="link-btn"></a>
                                    </div>
                                </li>

                                <li>
                                    <div class="box">
                                        <img src="assets/img/footer-gallery/footer-gallery-2.jpg" alt="image"/>
                                        <a href="#" target="_blank" class="link-btn"></a>
                                    </div>
                                </li>

                                <li>
                                    <div class="box">
                                        <img src="assets/img/footer-gallery/footer-gallery-3.jpg" alt="image"/>
                                        <a href="#" target="_blank" class="link-btn"></a>
                                    </div>
                                </li>

                                <li>
                                    <div class="box">
                                        <img src="assets/img/footer-gallery/footer-gallery-4.jpg" alt="image"/>
                                        <a href="#" target="_blank" class="link-btn"></a>
                                    </div>
                                </li>

                                <li>
                                    <div class="box">
                                        <img src="assets/img/footer-gallery/footer-gallery-5.jpg" alt="image"/>
                                        <a href="#" target="_blank" class="link-btn"></a>
                                    </div>
                                </li>

                                <li>
                                    <div class="box">
                                        <img src="assets/img/footer-gallery/footer-gallery-6.jpg" alt="image"/>
                                        <a href="#" target="_blank" class="link-btn"></a>
                                    </div>
                                </li>

                                <li>
                                    <div class="box">
                                        <img src="assets/img/footer-gallery/footer-gallery-1.jpg" alt="image"/>
                                        <a href="#" target="_blank" class="link-btn"></a>
                                    </div>
                                </li>

                                <li>
                                    <div class="box">
                                        <img src="assets/img/footer-gallery/footer-gallery-2.jpg" alt="image"/>
                                        <a href="#" target="_blank" class="link-btn"></a>
                                    </div>
                                </li>

                                <li>
                                    <div class="box">
                                        <img src="assets/img/footer-gallery/footer-gallery-3.jpg" alt="image"/>
                                        <a href="#" target="_blank" class="link-btn"></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <div class="copyright-area">
            <div class="container">
                <div class="copyright-area-content">
                    <p>
                        Copyright @<script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear())</script> Ketan. All Rights Reserved by
                        <a href="https://envytheme.com/" target="_blank">
                            EnvyTheme
                        </a>
                    </p>
                </div>
            </div>
        </div> */}
   
        <div class="go-top">
            <i class='bx bx-up-arrow-alt'></i>
        </div>
  
        <div class="dark-version">
            <label id="switch" class="switch">
                <input type="checkbox" onchange="toggleTheme()" id="slider"/>
                {/* <span class="slider round"></span> */}
            </label>
        </div>
        </>
    );
};
export default Footer;