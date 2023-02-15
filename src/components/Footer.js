import React from 'react'

function Footer() {
  return (
    <>
      <footer className="main-footer-wrap">
        <div className="container">
          <div className="row pt-5 pb-5 first-row">
            <div className="col-md-2">
              <h6 className='main-heading'>Lorem Ipsum</h6>
              <ul className="list-unstyled">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
                <li><a href="#">Link 5</a></li>
                <li><a href="#">Link 6</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className='main-heading'>Lorem Ipsum</h6>
              <ul className="list-unstyled">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className='main-heading'>Lorem Ipsum</h6>
              <ul className="list-unstyled">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className='main-heading'>Lorem Ipsum</h6>
              <ul className="list-unstyled">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6 className='main-heading'>Lorem Ipsum</h6>
              <ul className="list-unstyled">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
            {/* <div class="col-md-1 offset-md-1"></div>
            <div class="col-md-1"></div> */}
          </div>
        </div>
      </footer>

      <div className='footer-copyright-wrap'>
          <div className='container text-center pt-3 pb-3'>
              <div className='row '>
                  <div className='col-lg-12'>
                      <div className='social-wrap'>
                          <a href="http://www.facebook.com" target="_blank"><i className='fa fa-facebook'></i></a>
                          <a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a>
                          <a href="https://www.youtube.com" target="_blank"><i className="fa fa-youtube-play"></i></a>
                          <a href="https://www.pinterest.com" target="_blank"><i className="fa fa-pinterest-p"></i></a>
                          <a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a>
                          <a href="https://www.tiktok.com" target="_blank"><i className="fa fa-bell"></i></a>
                          <a href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                      </div>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-lg-12'>
                        <p className='copyright-text'>© 2017 - 2021 Magna Foodservice Ltd. All Rights Reserved.</p>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer