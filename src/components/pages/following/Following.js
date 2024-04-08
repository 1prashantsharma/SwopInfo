import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../header/Header';
import "../../../assets/css/main.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/responsive_media.css";
const Following = () => {
    return (
        <div>
            <div className="main_page">
                {/* <---------------------- This is Header sections --------------> */}
                <Header/>
                <div className="middle_sections">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="left_sections">
                                    <div className="profile_part">
                                        <div className="profile_bg">
                                            <div className="pro_img">
                                                <div className="user_profile_ico">
                                                    <span><img src="images/profile-img.jpg" alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="name-account-holder">
                                            <p>Welcome , Gavin Simoen!</p>
                                            <Link to="#">Update your profile</Link>
                                        </div>
                                        <div className="connetct_newworkd">
                                            <span>790</span>
                                            <Link to="#">Connections</Link>
                                            <p>Grow your network</p>
                                        </div>
                                        <div className="connetct_newworkd" style={{border:"none"}} >
                                            <span>120</span>
                                            <p><Link to="#" className="who-provisit">Who's viewed your profile</Link></p>
                                        </div>
                                    </div>
                                    <div className="bottme_uploads">
                                        <div className="company_ro_links">
                                            <div className="add_feed_bg">
                                                <div className="links_right_fol_trak">
                                                    <ul>
                                                        <li><Link to="#">About us</Link></li>
                                                        <li><Link to="#">Help Center  </Link></li>
                                                        <li><Link to="#"> Privacy & Terms</Link></li>
                                                        <li><Link to="#"> Business Services </Link></li>
                                                        <li><Link to="#"> Terms and conditions</Link></li>
                                                        <li><Link to="#"> Get the Swopinfo app</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="copyright_text">
                                                    <p>© 2018 - <Link to="#">SwopInfo.com</Link> <br />
                                                        All rights reserved.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add_space">
                                        <Link to="#"><span>
                                            <img src="images/add_img.jpg" alt="" /></span></Link>
                                    </div>
                                </div>
                                <div className="uploads_folders">
                                    <div className="all_uploads following">
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#" 
                                                    style={{textTransform:"uppercase"}}
                                                     >Gavin Simoen </Link>
                                                </div>
                                                <div className="close_btn">
                                                    <label className="dd">
                                                        <input type="checkbox" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="img_less-file following">
                                                <Link to="#"><img src="images/following/1.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#">PETRA SIMOEN</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <label className="dd">
                                                        <input type="checkbox" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="img_less-file following">
                                                <Link to="#"><img src="images/following/2.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#"  style={{textTransform:"uppercase"}}>Ashish Sharma</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <label className="dd">
                                                        <input type="checkbox" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="img_less-file following">
                                                <Link to="#"><img src="images/following/3.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#"  style={{textTransform:"uppercase"}}>Gavin Simoen </Link>
                                                </div>
                                                <div className="close_btn">
                                                    <label className="dd">
                                                        <input type="checkbox" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="img_less-file following">
                                                <Link to="#"><img src="images/following/1.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#">PETRA SIMOEN</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <label className="dd">
                                                        <input type="checkbox" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="img_less-file following">
                                                <Link to="#"><img src="images/following/2.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#"  style={{textTransform:"uppercase"}}>Ashish Sharma</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <label className="dd">
                                                        <input type="checkbox" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>                                                <div className="img_less-file following">
                                                <Link to="#"><img src="images/following/3.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#"  style={{textTransform:"uppercase"}}>Gavin Simoen </Link>
                                                </div>
                                                <div className="close_btn">
                                                    <label className="dd">
                                                        <input type="checkbox" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="img_less-file following">
                                                <Link to="#"><img src="images/following/1.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#">PETRA SIMOEN</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <label className="dd">
                                                        <input type="checkbox" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="img_less-file following">
                                                <Link to="#"><img src="images/following/2.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#"  style={{textTransform:"uppercase"}}>Ashish Sharma</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <label className="dd">
                                                        <input type="checkbox" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="img_less-file following">
                                                <Link to="#"><img src="images/following/3.jpg" alt="" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="modal fade" id="deleteProductModal" tabindex="-1" role="dialog" aria-labelledby="deleteProductModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header custome_desing">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="close_btn-teis">×</span></button>
                                                    <h4 className="modal-title" id="deleteProductModalLabel">Write an article</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <label for="message-text artic"
                                                        className="form-control-label">Write  article Here...
                                                        <span className="art-writ_penc">
                                                            <img src="images/write_art.png" alt="" /></span> </label>
                                                    <textarea className="post_msg" placeholder="Write...">

                                                    </textarea>
                                                </div>
                                                <div className="modal-footer bottome">
                                                    <button type="button" className="post_article_submit">
                                                        Post</button>
                                                    <button type="button" className="bnt-cancel_defult"
                                                        data-dismiss="modal">cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Following