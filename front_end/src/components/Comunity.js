import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getComunityPosts,
  deleteComunityPost,
  addComunityPosts,
} from "../redux/ComunityPost";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

const Comunity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComunityPosts());
  }, [dispatch]);
  const comunityposts = useSelector((state) => state.comunitypost);
  //  console.log(comunityposts);

  const [comunityData, setComunityData] = useState({
    comment_comunity_posts: " ",
    subject: " ",
    user_id_ComunityPost: localStorage.id,
    image_comunity_posts:null
  });
  // console.log(id)
  const handleChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    setComunityData({
      ...comunityData,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addComunityPosts(comunityData));
  };



 

  return (
    <>
      <div class="page-banner-area item-bg3">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="page-banner-content">
                <h2>Community</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner -->

        <!-- Start Blog Details Area --> */}

      <section class="blog-details-area ptb-100">
        <div class="container">
          <div class="comments-area">
            <div class="comment-respond">
              <h3 class="comment-reply-title">Post your questions</h3>
              {/* comment start */}
              <form class="comment-form" onSubmit={handleSubmit}  enctype="multipart/form-data">
                <p class="comment-notes">
                  <span id="email-notes"></span>

                  <span class="required"></span>
                </p>
                <h5>Image</h5>
                <input type="file"  name='image_comunity_posts'
                  // type="file"
                  onChange={handleChange}
                  // name="image"
                  multiple
                
                />
                <h5>Subject</h5>
                <input
                  type="text"
                  onChange={handleChange}
                  name="subject"
                  required
                />

                <h5>Post</h5>
                <p class="comment-form-comment">
                  <label>Comment</label>

                  <textarea
                    onChange={handleChange}
                    name="comment_comunity_posts"
                    cols="45"
                    placeholder="Your Post..."
                    rows="5"
                    maxlength="65525"
                    required="required"
                  ></textarea>
                </p>

                <p class="form-submit">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    class="submit"
                    value="Post "
                  />
                </p>
              </form>
            </div>
          </div>
        </div>
        <section class="class-area bg-fdf6ed pt-100 pb-70">
          <div class="container">
            <div class="section-title">
              <span>Posts</span>
              <h2>Popular Posts</h2>
            </div>

            <div class="row">
              {comunityposts.comunityposts.map((post) => {
                return (
                  <div class="col-lg-4 col-md-6" key={post.id}>
                    <div class="single-class">
                      <div class="class-image">
                        <a href="#">
                          <img src={"http://localhost:8000/upload/" + post.image_comunity_posts} alt="image" />
                        </a>
                      </div>

                      <div class="class-content">
                        <h6>
                          Post by:
                          <span style={{ color: "#6b6b84" }}> {post.name}</span> {post.created_at}
                        </h6>
                        <div class="price">
                          {" "}
                          <button
                            style={{
                              background: "none",
                              color: "inherit",
                              border: "none",
                              padding: " 10px",
                              font: "inherit",
                              outline: "inherit",
                            }}
                            onClick={() => {
                              dispatch(deleteComunityPost(post.id));
                            }}
                          >
                            <a class="comment-reply-link">
                              <Icon
                                icon="material-symbols:cancel-rounded"
                                style={{ fontSize: "24px", color: "white" }}
                              />
                            </a>
                          </button>
                        </div>

                        <h3>
                          <a href="#">{post.subject}</a>
                        </h3>
                        <p>{post.comment_comunity_posts}</p>

                        <ul class=""></ul>
                        <button
                          style={{
                            background: "none",
                            color: "inherit",
                            border: "none",
                            padding: " 10px",
                            font: "inherit",
                            outline: "inherit",
                          }}
                        >
                          <div class="class-btn">
                            <a href={`/SingleComunity/${post.id}`} class="default-btn">
                              Join conversation
                            </a>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="class-shape">
            <div class="shape-1">
              <img src="assets/img/class/class-shape-1.png" alt="image" />
            </div>
            <div class="shape-2">
              <img src="assets/img/class/class-shape-2.png" alt="image" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Comunity;
