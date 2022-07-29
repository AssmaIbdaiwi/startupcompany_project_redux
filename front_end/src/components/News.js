import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/postSlice";

const News =()=>{
      const dispatch = useDispatch();
    // const [data,setData]= useState ({})
     
      useEffect(() => {
        dispatch(getPosts());
        //  setData(posts)
      }, [dispatch]);
   const posts = useSelector((state) => state.post);
         console.log(posts);
//   const posts = useSelector((state) => state.post);

  

        return (
          <>
            <div className="page-banner-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="page-banner-content">
                      <h2>Blog</h2>
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>Blog</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Page Banner -->

        <!-- Start Blog Area --> */}
            <section className="blog-area pt-100 pb-100">
              <div className="container">
                <div className="row">
                  { posts.posts.map((post) => {
                    
                    return (
                      <div className="col-lg-4 col-md-6" key={post.id}>
                        <div className="single-blog-item">
                          <div className="blog-image">
                            <a href="#">
                              <img src={ "http://127.0.0.1:8000/api/apiposts/" + post.main_image  }/>
                            </a>
                          </div>

                          <div className="blog-content">
                            <ul className="post-meta">
                              <li>
                                <span>Published: </span>
                                {post.created_at}
                              </li>
                              <li>
                                <span>By: </span>
                                <a href="#">{post.doctor_id}</a>
                              </li>
                            </ul>
                            <h3>
                              <a href="blog-details.html">{post.title}</a>
                            </h3>
                            <p>{post.body}</p>

                            <div className="blog-btn">
                              <a href="/NewsDetails" className="default-btn">
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* pagination */}

                  {/* <div className="col-lg-12 col-md-12">
                    <div className="pagination-area">
                      <a href="#" className="prev page-numbers">
                        <i className="bx bx-chevron-left"></i>
                      </a>
                      <a href="#" className="page-numbers">
                        1
                      </a>
                      <span class="page-numbers current" aria-current="page">
                        2
                      </span>
                      <a href="#" class="page-numbers">
                        3
                      </a>
                      <a href="#" class="page-numbers">
                        4
                      </a>
                      <a href="#" class="next page-numbers">
                        <i class="bx bx-chevron-right"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>
          </>
        );
};
export default News;