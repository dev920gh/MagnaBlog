import React from 'react'

function BlogArticle() {

  return (
   <>
      <section className='main-post-wrap pt-5 pb-5'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-8 first-col'>
                  <div className='main-post-wrap'>
                      <img src={require('../assets/img/post-rectangle.png')} className="img-fluid"/>
                      <div className='main-post-content mt-4'>
                          <h5 className='post-heading mb-0'>Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam id arcu eu augue condimentum
                          amet consectetur adipiscing elit Nullam id arcu eu augue condimentum</h5>
                          <p className='post-desc show-on-mobile'>
                            quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus
                          </p>
                      </div>
                  </div>
              </div>
              <div className='col-lg-4 second-col pl-5'>
                  <div className='inner-wrap '>
                    <h5 className='main-heading mb-5'>Trending</h5>
                    <div className='trending-posts'>
                        <div className='post d-flex'>
                            <h5 className='number'>01</h5>
                            <div className='content-wrap'>
                                <h6 className='post-heading'>News needs to meet its audiences where they are</h6>
                                <p className='desc mb-0'>David Rogers <span>in</span> News</p>
                                <p className='date mb-0'>Jun 14 . 3 min red</p>
                            </div>
                        </div>
                        <div className='post d-flex'>
                            <h5 className='number'>02</h5>
                            <div className='content-wrap'>
                                <h6 className='post-heading'>News needs to meet its audiences where they are</h6>
                                <p className='desc mb-0'>David Rogers <span>in</span> News</p>
                                <p className='date mb-0'>Jun 14 . 3 min red</p>
                            </div>
                        </div>
                        <div className='post d-flex'>
                            <h5 className='number'>03</h5>
                            <div className='content-wrap'>
                                <h6 className='post-heading'>News needs to meet its audiences where they are</h6>
                                <p className='desc mb-0'>David Rogers <span>in</span> News</p>
                                <p className='date mb-0'>Jun 14 . 3 min red</p>
                            </div>
                        </div>
                        <div className='post d-flex'>
                            <h5 className='number'>04</h5>
                            <div className='content-wrap'>
                                <h6 className='post-heading'>News needs to meet its audiences where they are</h6>
                                <p className='desc mb-0'>David Rogers <span>in</span> News</p>
                                <p className='date mb-0'>Jun 14 . 3 min red</p>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <p className='post-desc hide-on-mobile'>
                      quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus
                    </p>
                </div>
            </div>
        </div>
      </section>
      <section className='pt-5 pb-5'>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-12'>
                    <h5 className='top-selling-heading mb-3'>Top Selling Products</h5>
                    <div className="top-selling">
                        <div className='item-wrap'>
                            <div className='inner-wrap'>
                                <img src={require('../assets/img/rectangle.png')} />
                                <div className='content-wrap'>
                                    <p>Lorem ipsum dolor sit amet consectetur
                                      adipiscing elit Nullam id arcu eu
                                      augue condimentum</p>
                                </div>
                            </div>
                        </div>
                        <div className='item-wrap'>
                            <div className='inner-wrap'>
                                <img src={require('../assets/img/rectangle.png')} />
                                <div className='content-wrap'>
                                    <p>Lorem ipsum dolor sit amet consectetur
                                      adipiscing elit Nullam id arcu eu
                                      augue condimentum</p>
                                </div>
                            </div>
                        </div>
                        <div className='item-wrap'>
                            <div className='inner-wrap'>
                                <img src={require('../assets/img/rectangle.png')} />
                                <div className='content-wrap'>
                                    <p>Lorem ipsum dolor sit amet consectetur
                                      adipiscing elit Nullam id arcu eu
                                      augue condimentum</p>
                                </div>
                            </div>
                        </div>
                        <div className='item-wrap'>
                            <div className='inner-wrap'>
                                <img src={require('../assets/img/rectangle.png')} />
                                <div className='content-wrap'>
                                    <p>Lorem ipsum dolor sit amet consectetur
                                      adipiscing elit Nullam id arcu eu
                                      augue condimentum</p>
                                </div>
                            </div>
                        </div>
                        <div className='item-wrap'>
                            <div className='inner-wrap'>
                                <img src={require('../assets/img/rectangle.png')} />
                                <div className='content-wrap'>
                                    <p>Lorem ipsum dolor sit amet consectetur
                                      adipiscing elit Nullam id arcu eu
                                      augue condimentum</p>
                                </div>
                            </div>
                        </div>
                        <div className='item-wrap'>
                            <div className='inner-wrap'>
                                <img src={require('../assets/img/rectangle.png')} />
                                <div className='content-wrap'>
                                    <p>Lorem ipsum dolor sit amet consectetur
                                      adipiscing elit Nullam id arcu eu
                                      augue condimentum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div> 
              </div>
          </div>
      </section>
      <section className='newsletter-sec pt-5 pb-5'>
          <div className='container newsletter-container'>
                <div className='row'>
                      <div className='col-lg-12'>
                            <h6 className='newsletter-heading'>Join Our Newsletter</h6>
                            <p className='newsletter-desc'>Subscribe to our newsletter with your email below</p>
                            <form className="form-inline newsletter-form">
                                <div className="form-group mr-auto d-flex">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-caret-down"></i>
                                        </span>
                                        </div>
                                        <select className="form-control" defaultValue="Category">
                                            <option value="Category">Category</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                    <input type="text" className="form-control ml-2" placeholder="Your email address..." />
                                    <button type="submit" className="btn btn-primary ml-auto">Subscribe!</button>
                                </div>
                            </form>
                      </div>
                </div>
          </div>
      </section>
   </>
  )
}

export default BlogArticle