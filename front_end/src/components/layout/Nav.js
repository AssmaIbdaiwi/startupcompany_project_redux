  
  import { NavLink } from "react-router-dom";
  import { Link } from "react-router-dom";

const Nav =()=>{
        return(

  <>


        <div class="navbar-area">
            <div class="main-responsive-nav">
                <div class="container">
                    <div class="main-responsive-menu">
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" class="black-logo" alt="image"/>
                                <img src="assets/img/logo-2.png" class="white-logo" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-navbar">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" class="black-logo" alt="image"/>
                            <img src="assets/img/logo-2.png" class="white-logo" alt="image"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">
                                        Home 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="index.html" class="nav-link">
                                                Home One
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-2.html" class="nav-link">
                                                Home Two
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-3.html" class="nav-link active">
                                                Home Three
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-4.html" class="nav-link">
                                                Home Four
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Pages 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="about.html" class="nav-link">
                                                About
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">
                                                Gallery
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="pricing.html" class="nav-link">
                                                Pricing
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="how-to-apply.html" class="nav-link">
                                                How to Apply
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="programs.html" class="nav-link">
                                                Programs
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="enroll.html" class="nav-link">
                                                Enroll
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="timetable.html" class="nav-link">
                                                Timetable
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="faq.html" class="nav-link">
                                                FAQ
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                Account 
                                                <i class='bx bx-chevron-down'></i>
                                            </a>
        
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="login.html" class="nav-link">
                                                        Login
                                                    </a>
                                                </li>
        
                                                <li class="nav-item">
                                                    <a href="register.html" class="nav-link">
                                                        Register
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="error-404.html" class="nav-link">
                                                Error Page
                                            </a>
                                        </li>
                                
                                        <li class="nav-item">
                                            <a href="terms-of-service.html" class="nav-link">
                                                Terms of Service
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="privacy-policy.html" class="nav-link">
                                                Privacy Policy
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="coming-soon.html" class="nav-link">
                                                Coming Soon
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Teacher 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="teacher.html" class="nav-link">
                                                Teacher
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="teacher-details.html" class="nav-link">
                                                Teacher Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Event 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="event.html" class="nav-link">
                                                Event
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="event-details.html" class="nav-link">
                                                Event Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Class 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="class.html" class="nav-link">
                                                Class
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="class-details.html" class="nav-link">
                                                Class Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Blog 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog.html" class="nav-link">
                                                Blog
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-details.html" class="nav-link">
                                                Blog Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <div class="others-options d-flex align-items-center">
                                {/* <div class="option-item">
                                    <div class="dropdown language-switcher d-inline-block">
                                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Language <i class='bx bx-chevron-down'></i></span>
                                        </button>
    
                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/english.png" class="shadow-sm" alt="flag"/>
                                                <span>English</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/arab.png" class="shadow-sm" alt="flag"/>
                                                <span>العربيّة</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/germany.png" class="shadow-sm" alt="flag"/>
                                                <span>Deutsch</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/portugal.png" class="shadow-sm" alt="flag"/>
                                                <span>Português</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/china.png" class="shadow-sm" alt="flag"/>
                                                <span>简体中文</span>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}

                                <div class="option-item">
                                <Link to ="/login"> <a href="#" class="default-btn">Login</a></Link>
                                </div>

                                <div class="option-item">
                                <Link to ="/sign_up"><a href="#" class="default-btn">Sign Up</a></Link>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div class="others-option-for-responsive">
                <div class="container">
                    <div class="dot-menu">
                        <div class="inner">
                            <div class="circle circle-one"></div>
                            <div class="circle circle-two"></div>
                            <div class="circle circle-three"></div>
                        </div>
                    </div>
                    
                    <div class="container">
                        <div class="option-inner">
                            <div class="others-options d-flex align-items-center">
                                <div class="option-item">
                                    <div class="dropdown language-switcher d-inline-block">
                                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Language <i class='bx bx-chevron-down'></i></span>
                                        </button>
    
                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/english.png" class="shadow-sm" alt="flag"/>
                                                <span>English</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/arab.png" class="shadow-sm" alt="flag"/>
                                                <span>العربيّة</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/germany.png" class="shadow-sm" alt="flag"/>
                                                <span>Deutsch</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/portugal.png" class="shadow-sm" alt="flag"/>
                                                <span>Português</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="assets/img/china.png" class="shadow-sm" alt="flag"/>
                                                <span>简体中文</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="option-item">
                                    <a href="#" class="default-btn">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
</>
                );
}

export default Nav;