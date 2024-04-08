import React from 'react'
import { Link } from 'react-router-dom';
import "../../../assets/css/main.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/responsive_media.css";
import Header from '../../header/Header';
import profile_img from "../../../assets/images/profile-img.jpg";
import add_img from "../../../assets/images/add_img.jpg";
import add from "../../../assets/images/uploads-icon/add.png";
import favicons from "../../../assets/images/favicons.png";
import favicons2 from "../../../assets/images/favicons-2.png";
import favicons3 from "../../../assets/images/favicons3.png";
import write_art from "../../../assets/images/write_art.png";
const BookMarks = () => {
    return (
        <div>
            <div className="main_page">
                {/* <-------------- This is Header Sections -------------------> */}
                <Header />
                <div className="middle_sections">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="left_sections">
                                    <div className="profile_part">
                                        <div className="profile_bg">
                                            <div className="pro_img">
                                                <div className="user_profile_ico">
                                                    <span><img src={profile_img} alt="" /></span>
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
                                        <div className="connetct_newworkd" style={{ border: "none" }}>
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
                                        <Link to="#"><span><img src={add_img} alt="" /></span></Link>
                                    </div>
                                </div>
                                <div className="uploads_folders">
                                    <div className="add_articlas">
                                        <div className="upload_btns">
                                            <div className="first_uploads">
                                                <Link to="#" data-toggle="modal"
                                                    data-target="#deleteProductModal"
                                                    data-productid="3" data-productname="Product 3">
                                                    <img src={add} alt="" /> Add</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="all_uploads">
                                        <div className="book_mart_list">
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons} alt="" /> <Link to="#">Icecast</Link> </p>
                                                    <p className="full_url">https://cp3.shoutcheap.com:2199/login/index.php</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button"
                                                        className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons2} alt="" /> <Link to="#">Onesignal</Link> </p>
                                                    <p className="full_url">https://onesignal.com/apps/2a86e5ba-8d77-449e-ac9b-dd7cb42cc2ec</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons} alt="" /> <Link to="#"> Applozic - Signin</Link> </p>
                                                    <p className="full_url">https://dashboard.applozic.com/admin/dashboard.html</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons3} alt="" /> <Link to="#">Dev Console Android</Link> </p>
                                                    <p className="full_url">https://play.google.com/apps/publish/?dev_acc=14362852009122591790#AppDashboardPlace:p=com.parasme.swopinfo</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons} alt="" /> <Link to="#">Icecast</Link> </p>
                                                    <p className="full_url">https://cp3.shoutcheap.com:2199/login/index.php</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons2} alt="" /> <Link to="#">Onesignal</Link> </p>
                                                    <p className="full_url">https://onesignal.com/apps/2a86e5ba-8d77-449e-ac9b-dd7cb42cc2ec</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons} alt="" /> <Link to="#"> Applozic - Signin</Link> </p>
                                                    <p className="full_url">https://dashboard.applozic.com/admin/dashboard.html</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons3} alt="" /> <Link to="#">Dev Console Android</Link> </p>
                                                    <p className="full_url">https://play.google.com/apps/publish/?dev_acc=14362852009122591790#AppDashboardPlace:p=com.parasme.swopinfo</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons} alt="" /> <Link to="#">Icecast</Link> </p>
                                                    <p className="full_url">https://cp3.shoutcheap.com:2199/login/index.php</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons2} alt="" /> <Link to="#">Onesignal</Link> </p>
                                                    <p className="full_url">https://onesignal.com/apps/2a86e5ba-8d77-449e-ac9b-dd7cb42cc2ec</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons} alt="" /> <Link to="#"> Applozic - Signin</Link> </p>
                                                    <p className="full_url">https://dashboard.applozic.com/admin/dashboard.html</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
                                            </div>
                                            <div className="firs_busy_bookmakrs">
                                                <div className="heading_url">
                                                    <p><img src={favicons3} alt="" /> <Link to="#">Dev Console Android</Link> </p>
                                                    <p className="full_url">https://play.google.com/apps/publish/?dev_acc=14362852009122591790#AppDashboardPlace:p=com.parasme.swopinfo</p>
                                                </div>
                                                <div className="close_book_marks">
                                                    <span><input type="button" className="close_bnt_bookmarks" /></span>
                                                </div>
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
                                                    <label for="message-text artic" className="form-control-label">Write  article Here...
                                                        <span className="art-writ_penc"><img src={write_art} alt="" /></span> </label>
                                                    <textarea className="post_msg" placeholder="Write..."></textarea>
                                                </div>
                                                <div className="modal-footer bottome">
                                                    <button type="button" className="post_article_submit">Post</button>
                                                    <button type="button" className="bnt-cancel_defult" data-dismiss="modal">cancel</button>
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

export default BookMarks