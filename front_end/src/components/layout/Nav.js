import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { logout } from "../../redux/userSlice";

const Nav = () => {
  let navigate = useNavigate();
  const status = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/home", { replace: true });
  };

  let id = localStorage.getItem('id');

  return (
    <>
      <div class="navbar-area">
        <div class="main-responsive-nav">
          <div class="container">
            <div class="main-responsive-menu">
              <div class="logo">
                <a href="/">
                  <img
                    src="assets/img/logo.png"
                    class="black-logo"
                    alt="image"
                  />
                  <img
                    src="assets/img/logo-2.png"
                    class="white-logo"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="main-navbar">
          <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
              <a class="navbar-brand" href="/">
                <img src="assets/img/logo2.png" class="black-logo" alt="image" style={{width:"88px"}} />
                <img
                  src="assets/img/logo-2.png"
                  class="white-logo"
                  alt="image"
                  href="/"
                />
              </a>

              <div
                class="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a href="/" class="nav-link active">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/Doctors" class="nav-link ">
                      Doctors
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="/News" class="nav-link ">
                      News
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/About" class="nav-link ">
                      About us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/Contact" class="nav-link ">
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

                  {id && (
                    <div class="option-item">
                      <Link to="/login">
                        {" "}
                        <a href="#" class="default-btn">
                          Login
                        </a>
                      </Link>
                    </div>
                  )}
                  {id && (
                    <div class="option-item">
                      <Link to="/sign_up">
                        <a href="#" class="default-btn">
                          Sign Up
                        </a>
                      </Link>
                    </div>
                  )}

                  {id>0 && (
                    <div class="option-item">
                      <Link to="/Profile">
                        <a href="#" class="default-btn">
                          Profile
                        </a>
                      </Link>
                    </div>
                  )}

                  {id>0 && (
                    <div class="option-item">
                      <Link to="/" onClick={handleLogout}>
                        <a href="#" class="default-btn">
                          Logout
                        </a>
                      </Link>
                    </div>
                  )}
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
                      <button
                        class="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>
                          Language <i class="bx bx-chevron-down"></i>
                        </span>
                      </button>

                      <div class="dropdown-menu">
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/english.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>English</span>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/arab.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>العربيّة</span>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/germany.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>Deutsch</span>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/portugal.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>Português</span>
                        </a>
                        <a
                          href="#"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/china.png"
                            class="shadow-sm"
                            alt="flag"
                          />
                          <span>简体中文</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="option-item">
                    <a href="#" class="default-btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
