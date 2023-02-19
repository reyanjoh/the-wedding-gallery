import React from 'react'
import BlogSectionSponsor from './BlogSectionSponsor'

const BlogSectionTopFive = () => {
  return (
    <section className='scroll-area BlogSectionTopFive'>
        <div className='BlogSectionTopFive-container'>
          <div className='BlogSectionTopFive-content-container'>
            <div className='BlogSectionTopFive-content BlogSectionTopFive-large-content'>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className='BlogSectionTopFive-large-content-cover'>
                  <img className='BlogSectionTopFive-large-content-cover-img' src="https://images.unsplash.com/photo-1633405060388-dbfb4c8fe68a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80" alt="" srcset="" />
                </div>

                <div className='BlogSectionTopFive-large-content-author'>
                  <div>
                    <img src="https://cdn.icon-icons.com/icons2/1238/PNG/512/githublogo1_83886.png" alt="" srcset="" />
                    <h4>Jane Doe</h4>
                    <time pubdate datetime="2023-08-28" title="August 28th, 2023">August 28th, 2023</time>
                  </div>
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque ratione voluptates?
                  </h2>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus soluta, reiciendis iste esse, sequi ab commodi non, obcaecati modi necessitatibus reprehenderit quaerat possimus ratione minima!</p>
                </div>
              </a>
            </div>
            <div className='BlogSectionTopFive-content BlogSectionTopFive-small-content'>

              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className='BlogSectionTopFive-small-content-containers'>
                  <div className="BlogSectionTopFive-small-content-img-container">
                    <img className='BlogSectionTopFive-small-content-img' src="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" srcset="" />
                  </div>
                  <div className="BlogSectionTopFive-small-content-author-and-title">
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="BlogSectionTopFive-small-content-author">
                      <div>
                        <img src="https://cdn.icon-icons.com/icons2/1238/PNG/512/githublogo1_83886.png" alt="" srcset="" />
                        <h4>Jane Doe</h4>
                        <time pubdate datetime="2023-08-28" title="August 28th, 2023">August 28th, 2023</time>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className='BlogSectionTopFive-small-content-containers'>
                  <div className="BlogSectionTopFive-small-content-img-container">
                    <img className='BlogSectionTopFive-small-content-img' src="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" srcset="" />
                  </div>
                  <div className="BlogSectionTopFive-small-content-author-and-title">
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="BlogSectionTopFive-small-content-author">
                      <div>
                        <img src="https://cdn.icon-icons.com/icons2/1238/PNG/512/githublogo1_83886.png" alt="" srcset="" />
                        <h4>Jane Doe</h4>
                        <time pubdate datetime="2023-08-28" title="August 28th, 2023">August 28th, 2023</time>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className='BlogSectionTopFive-small-content-containers'>
                  <div className="BlogSectionTopFive-small-content-img-container">
                    <img className='BlogSectionTopFive-small-content-img' src="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" srcset="" />
                  </div>
                  <div className="BlogSectionTopFive-small-content-author-and-title">
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="BlogSectionTopFive-small-content-author">
                      <div>
                        <img src="https://cdn.icon-icons.com/icons2/1238/PNG/512/githublogo1_83886.png" alt="" srcset="" />
                        <h4>Jane Doe</h4>
                        <time pubdate datetime="2023-08-28" title="August 28th, 2023">August 28th, 2023</time>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              
              <a className='not-available' href="/blogs/all-blogs" rel="noopener noreferrer">
                <div className='BlogSectionTopFive-content-view-more'>View More</div>
              </a>                          
            </div>
          </div>
          <BlogSectionSponsor /> 
        </div>
    </section>
  )
}

export default BlogSectionTopFive