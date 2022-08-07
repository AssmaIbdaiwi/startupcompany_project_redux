import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  let id = localStorage.getItem("id");
  console.log(id);
  const [data, setData] = useState({});



    const fetchProfile = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/get/${id}`)
    const myProfile = await response.json();

    setData(myProfile);
    console.log("**********************");
    console.log(myProfile);

    }

 

  // console.log(userData);

  useEffect(() => {
    fetchProfile();
  }, []);


  function handelSubmet(e) {
    e.preventDefault();

    axios
      .post(`http://127.0.0.1:8000/api/update/` + id, { ...data })
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("id", res.data.id);
      });
  }

  //  const handleChangeImage = (e) => {
  //    setData({
  //      ...data,
  //      image: e.target.files[0],
  //    });
  //  };





  return (
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
                  <span>You are welcome</span>
                  {/* <h3>Online Class Registration</h3> */}
                </div>

                <form onSubmit={handelSubmet}>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      defaultValue={data.name}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                  </div>
                  <br />

                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      defaultValue={data.email}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                  </div>
                  <br />

                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                      defaultValue={data.mobile}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, mobile: e.target.value }))
                      }
                    />
                  </div>
                  <br />

                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="password"
                      //   defaultValue={data.password}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <br />
                  {/* <input
                    type="file"
                    onChange={handleChangeImage}
                    name="image_comunity_posts"
                  /> */}
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
