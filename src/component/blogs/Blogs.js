import React from 'react';
import banner from '../../assets/img/banner_bg.jpg';

const Blogs = () => {
    return (
        <>
            <div className="inner_pages_banner position-absolute top-0 start-0"></div>
            <div className="baner_text d-flex sections_padding pt-0 align-items-center text-center">
                <div className="container">
                    <h1>Blogs</h1>
                </div>
            </div>
            <div className="sections_padding mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card blogs_box">
                                        <img className="card-img-top" src={banner} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h4 className="card-title fw-700 mb-3">Personal words from our CEO about racism</h4>
                                                <h6 className="mb-3 py-2 d-flex justify-content-between">
                                                    <div className="comment_admin_box"><i className="fa fa-comment-dots me-2"></i>8 Comments</div>
                                                    <div className="comment_admin_box"><i className="fa fa-user-clock me-2"></i>Admin</div>
                                                </h6>
                                                <p className="card-text">Personal Words From Our CEO saw people with Black Lives Matter signs. I felt resistance when I first heard about an important Dutch discussion: Zwarte Piet (Black Pete). That …
                                                </p>
                                                <a href="#" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Read More...</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card blogs_box">
                                        <img className="card-img-top" src={banner} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h4 className="card-title fw-700 mb-3">Personal words from our CEO about racism</h4>
                                                <h6 className="mb-3 py-2 d-flex justify-content-between">
                                                    <div className="comment_admin_box"><i className="fa fa-comment-dots me-2"></i>8 Comments</div>
                                                    <div className="comment_admin_box"><i className="fa fa-user-clock me-2"></i>Admin</div>
                                                </h6>
                                                <p className="card-text">Personal Words From Our CEO saw people with Black Lives Matter signs. I felt resistance when I first heard about an important Dutch discussion: Zwarte Piet (Black Pete). That …
                                                </p>
                                                <a href="#" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Read More...</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card blogs_box">
                                        <img className="card-img-top" src={banner} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h4 className="card-title fw-700 mb-3">Personal words from our CEO about racism</h4>
                                                <h6 className="mb-3 py-2 d-flex justify-content-between">
                                                    <div className="comment_admin_box"><i className="fa fa-comment-dots me-2"></i>8 Comments</div>
                                                    <div className="comment_admin_box"><i className="fa fa-user-clock me-2"></i>Admin</div>
                                                </h6>
                                                <p className="card-text">Personal Words From Our CEO saw people with Black Lives Matter signs. I felt resistance when I first heard about an important Dutch discussion: Zwarte Piet (Black Pete). That …
                                                </p>
                                                <a href="#" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Read More...</a>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card blogs_box">
                                        <img className="card-img-top" src={banner} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h4 className="card-title fw-700 mb-3">Personal words from our CEO about racism</h4>
                                                <h6 className="mb-3 py-2 d-flex justify-content-between">
                                                    <div className="comment_admin_box"><i className="fa fa-comment-dots me-2"></i>8 Comments</div>
                                                    <div className="comment_admin_box"><i className="fa fa-user-clock me-2"></i>Admin</div>
                                                </h6>
                                                <p className="card-text">Personal Words From Our CEO saw people with Black Lives Matter signs. I felt resistance when I first heard about an important Dutch discussion: Zwarte Piet (Black Pete). That …
                                                </p>
                                                <a href="#" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Read More...</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 offset-md-1">
                            <div className="sidebar">
                                <div className="input-box position-relative mb-4">
                                    <input type="text" className="form-control" placeholder="Search Blogs"/>
                                        <i className="fa fa-search"></i>
                                </div>
                                <div className="sidebar_posts_box mb-4">
                                    <h4 className="mb-4">Recent Posts</h4>
                                    <a href="#" className="mb-2 d-block"><p>Personal words from our</p></a>
                                    <a href="#" className="mb-2 d-block"><p>CEO about racism</p></a>
                                    <a href="#" className="mb-2 d-block"><p>The Newest Family Travel</p></a>
                                    <a href="#" className="mb-2 d-block"><p>Trend: Caravaning in Spain</p></a>
                                </div>
                                <div className="sidebar_posts_box mb-4">
                                    <h4 className="mb-4">Archives</h4>
                                    <a href="#" className="mb-2 d-block"><p>June 2020</p></a>
                                    <a href="#" className="mb-2 d-block"><p>April 2020</p></a>
                                </div>
                                <div className="sidebar_posts_box mb-4">
                                    <h4 className="mb-4">Categories </h4>
                                    <a href="#" className="mb-2 d-block"><p>Parenting</p></a>
                                    <a href="#" className="mb-2 d-block"><p>Uncategorized</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs