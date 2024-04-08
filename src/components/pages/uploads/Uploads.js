import React from 'react'
import "../../../assets/css/main.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/responsive_media.css";
import "../../../assets/css/fa-brands.css";
import "../../../assets/css/fa-regular.css";
import "../../../assets/css/fontawesome.css";
import "../../../assets/css/gallery.css";
import "../../../assets/css/lightbox.min.css";
import { Link } from 'react-router-dom';
import uploads from "../../../assets/images/icon/uploads.png";
import add_img from "../../../assets/images/add_img.jpg";
import write_art from "../../../assets/images/write_art.png";
import add from "../../../assets/images/uploads-icon/add.png";
import folders from "../../../assets/images/uploads-icon/folders.png";
import img_01 from "../../../assets/images/uploads-images/01.png";
import profile_img from "../../../assets/images/profile-img.jpg";
import Header from '../../header/Header';

const Uploads = () => {
    return (
        <div>
            <div className="main_page">
                {/* <-------------- This is Header sections ----------------> */}
                <Header/>
                {/* <----------- This is Middle sections --------------------> */}
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
                                        <div className="connetct_newworkd" style={{border:"none"}}>
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
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
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
                                                <Link to="#" className="add_active">
                                                    <img src={uploads} alt="" /> Uploads</Link>
                                            </div>
                                            <div className="first_uploads">
                                                <Link to="#">
                                                    <img src={folders} alt="" /> Folders</Link>
                                            </div>
                                            <div className="first_uploads">
                                                <Link to="#" data-toggle="modal" data-target="#deleteProductModal" data-productid="3" data-productname="Product 3">
                                                    <img src={add} alt="" /> Add</Link>
                                            </div>
                                        </div>
                                        <div className="listing_view_and_downloads">
                                            <div className="first_views">
                                                <p>Views <span>24104</span></p>
                                            </div>
                                            <div className="first_views">
                                                <p>Downloads <span>3350</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="all_uploads">

                                        <div className="first_box_uploads">

                                            <div className="file_name">

                                                <div className="title_file">

                                                    <Link to="#">TMPF_1520764735950.JPG</Link>

                                                </div>

                                                <div className="close_btn">

                                                    <input type="button" className="close_now" />

                                                </div>


                                            </div>

                                            <div className="img_less-file">

                                                <Link to="#"><img src={img_01} alt="" /></Link>



                                            </div>

                                            <div className="view_and_downloads">

                                                <div className="left_view">
                                                    <p>Views <Link to="#"> 33 </Link></p>



                                                </div>

                                                <div className="left_view">
                                                    <p>Downloads <Link to="#"> 33 </Link></p>



                                                </div>

                                            </div>






                                        </div>

                                        <div className="first_box_uploads">

                                            <div className="file_name">

                                                <div className="title_file">

                                                    <Link to="#">TMPF_1520764735950.JPG</Link>

                                                </div>

                                                <div className="close_btn">

                                                    <input type="button" className="close_now" />

                                                </div>


                                            </div>

                                            <div className="img_less-file">

                                                <Link to="#"><img src={img_01} alt="" /></Link>



                                            </div>

                                            <div className="view_and_downloads">

                                                <div className="left_view">
                                                    <p>Views <Link to="#"> 33 </Link></p>



                                                </div>

                                                <div className="left_view">
                                                    <p>Downloads <Link to="#"> 33 </Link></p>



                                                </div>

                                            </div>






                                        </div>


                                        <div className="first_box_uploads">

                                            <div className="file_name">

                                                <div className="title_file">

                                                    <Link to="#">TMPF_1520764735950.JPG</Link>

                                                </div>

                                                <div className="close_btn">

                                                    <input type="button" className="close_now" />

                                                </div>


                                            </div>

                                            <div className="img_less-file">

                                                <Link to="#"><img src={img_01} alt="" /></Link>



                                            </div>

                                            <div className="view_and_downloads">

                                                <div className="left_view">
                                                    <p>Views <Link to="#"> 33 </Link></p>



                                                </div>

                                                <div className="left_view">
                                                    <p>Downloads <Link to="#"> 33 </Link></p>



                                                </div>

                                            </div>






                                        </div>


                                        <div className="first_box_uploads">

                                            <div className="file_name">

                                                <div className="title_file">

                                                    <Link to="#">TMPF_1520764735950.JPG</Link>

                                                </div>

                                                <div className="close_btn">

                                                    <input type="button" className="close_now" />

                                                </div>


                                            </div>

                                            <div className="img_less-file">

                                                <Link to="#"><img src={img_01} alt="" /></Link>



                                            </div>

                                            <div className="view_and_downloads">

                                                <div className="left_view">
                                                    <p>Views <Link to="#"> 33 </Link></p>



                                                </div>

                                                <div className="left_view">
                                                    <p>Downloads <Link to="#"> 33 </Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#">TMPF_1520764735950.JPG</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <input type="button" className="close_now" />
                                                </div>
                                            </div>
                                            <div className="img_less-file">
                                                <Link to="#"><img src={img_01} alt="" /></Link>
                                            </div>
                                            <div className="view_and_downloads">
                                                <div className="left_view">
                                                    <p>Views <Link to="#"> 33 </Link></p>
                                                </div>
                                                <div className="left_view">
                                                    <p>Downloads <Link to="#"> 33 </Link></p></div>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#">TMPF_1520764735950.JPG</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <input type="button" className="close_now" />
                                                </div>
                                            </div>
                                            <div className="img_less-file">
                                                <Link to="#"><img src={img_01} alt="" /></Link>
                                            </div>
                                            <div className="view_and_downloads">
                                                <div className="left_view">
                                                    <p>Views <Link to="#"> 33 </Link></p>
                                                </div>
                                                <div className="left_view">
                                                    <p>Downloads <Link to="#"> 33 </Link></p></div>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#">TMPF_1520764735950.JPG</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <input type="button" className="close_now" />
                                                </div>
                                            </div>
                                            <div className="img_less-file">
                                                <Link to="#"><img src={img_01} alt="" /></Link>
                                            </div>
                                            <div className="view_and_downloads">
                                                <div className="left_view">
                                                    <p>Views <Link to="#"> 33 </Link></p>
                                                </div>
                                                <div className="left_view">
                                                    <p>Downloads <Link to="#"> 33 </Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#">TMPF_1520764735950.JPG</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <input type="button" className="close_now" />
                                                </div>
                                            </div>
                                            <div className="img_less-file">
                                                <Link to="#"><img src={img_01} alt="" /></Link>
                                            </div>
                                            <div className="view_and_downloads">
                                                <div className="left_view">
                                                    <p>Views <Link to="#"> 33 </Link></p>
                                                </div>
                                                <div className="left_view">
                                                    <p>Downloads <Link to="#"> 33 </Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="first_box_uploads">
                                            <div className="file_name">
                                                <div className="title_file">
                                                    <Link to="#">TMPF_1520764735950.JPG</Link>
                                                </div>
                                                <div className="close_btn">
                                                    <input type="button" className="close_now" />
                                                </div>
                                            </div>
                                            <div className="img_less-file">
                                                <Link to="#"><img src={img_01} alt="" /></Link>
                                            </div>
                                            <div className="view_and_downloads">
                                                <div className="left_view">
                                                    <p>Views <Link to="#"> 33 </Link></p>
                                                </div>
                                                <div className="left_view">
                                                    <p>Downloads <Link to="#"> 33 </Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="modal fade" id="deleteProductModal" tabindex="-1" role="dialog"
                                        aria-labelledby="deleteProductModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header custome_desing">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span className="close_btn-teis">×</span></button>
                                                    <h4 className="modal-title" id="deleteProductModalLabel">Write an article</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <label for="message-text artic" className="form-control-label">Write  article Here...<span
                                                        className="art-writ_penc">
                                                            <img src={write_art} alt="" /></span> </label>
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

export default Uploads