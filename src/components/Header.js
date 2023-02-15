import React from 'react'

function Header() {
  return (
    <>
        <div className="wrap top-bar">
            <div className="container">
                <div className="row justify-content-between pt-2 pb-2">
                    <div className="col-lg-6 d-flex justify-content-start left-menu">
                        <div className="mb-0 ">
                            <a href="#">Food Blogs</a>
                            <a href="#">Inspirations</a>
                            <a href="#">Kitchen Stories</a>
                            <a href="#">News</a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end right-menu">
                        <div className="mb-0 first">
                            <a href="#" className="">Login / Register</a>
                            <a href="#" className="">My Account</a>
                        </div>
                        <div className="mb-0 second">
                            <a href="#" className="">Help</a>
                            <a href="#" className="">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg" >
            <div className="container nav-container">
                <div className='row header-row'>
                    <div className='col-lg-3 first'>
                        <a className="navbar-brand" href="index.html">
                            <img src={require('../assets/img/magna-logo-white.jpg')} className="logo-img"/>
                        </a>
                    </div>
                    <div className='col-lg-6 second'>
                        <div className="searchform ">
                            <div className="form-group d-flex">
                                <input type="text" className="form-control col-lg-12" placeholder="Search product or brand" />
                                <button type="submit" className="form-control search">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 third'>
                        <div className='account-wrap'>
                            <a>
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                                <span>Accounts</span>
                            </a>
                            <a>
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <span>Favorites</span>
                            </a>
                            <a>
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                                <span>Basket</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className='menu-wrap'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-evenly pt-2 pb-2 menu-col'>
                        <a href="#">Main Menu</a>
                        <a href="#">Information</a>
                        <a href="#">Food Blogs</a>
                        <a href="#">Social Feed</a>
                        <a href="#">Latest News</a>
                        <a href="#">Kitchen Stories</a>
                        <a href="#">Best Sellers</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header