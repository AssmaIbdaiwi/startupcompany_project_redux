import React from "react";

const News =()=>{



    
        return (
          <>
            <div class="page-banner-area">
              <div class="d-table">
                <div class="d-table-cell">
                  <div class="container">
                    <div class="page-banner-content">
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
            <section class="blog-area pt-100 pb-100">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="single-blog-item">
                      <div class="blog-image">
                        <a href="#">
                          <img src="assets/img/blog/blog-1.jpg" alt="image" />
                        </a>
                      </div>

                      <div class="blog-content">
                        <ul class="post-meta">
                          <li>
                            <span>Published: </span>
                            25 Dec 2022
                          </li>
                          <li>
                            <span>By: </span>
                            <a href="#">Jack Johnx</a>
                          </li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Red Green Color Blindness
                          </a>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>

                        <div class="blog-btn">
                          <a href="/NewsDetails" class="default-btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* pagination */}

                  <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                      <a href="#" class="prev page-numbers">
                        <i class="bx bx-chevron-left"></i>
                      </a>
                      <a href="#" class="page-numbers">
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
                  </div>
                </div>
              </div>
            </section>
          </>
        );
};
export default News;