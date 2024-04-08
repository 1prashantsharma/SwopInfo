import React from 'react';
import Header from '../../header/Header';
import "../../../assets/css/main.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/responsive_media.css";
import { Link } from 'react-router-dom';
import profile_img from "../../../assets/images/profile-img.jpg";
import add_img from "../../../assets/images/add_img.jpg";
import invite_friends from "../../../assets/images/invite-friends.png";
import share_icons from "../../../assets/images/share_icons.png";
import facebook from "../../../assets/images/facebook.png";
const Invite_Friends = () => {
    return (
        <div>
            <div className="main_page">
                {/* <---------------- This is Header Sections--------------- */}
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
                                                    <p>© 2024 - <Link to="#">SwopInfo.com</Link> <br />
                                                        All rights reserved.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add_space">
                                        <Link to="#"><span><img src={add_img} alt="" /></span></Link>
                                    </div>
                                </div>
                                <div className="uploads_folders invi">
                                    <div className="all_uploads following">
                                        <div className="invite_friends">
                                            <div className="invite_friends_text">
                                                <p><span className="invited_friends_img">
                                                    <img src={invite_friends} alt="" /></span>
                                                    <span className="invite_text">Invite Friends</span></p>
                                            </div>
                                            <div className="select_opitions_infirted">
                                                <div className="select_in_box">
                                                    <select className="invited_list_friends">
                                                        <option>All Friends</option>
                                                        <option>Web Friends</option>
                                                        <option>Mobile Friends</option>
                                                        <option>Arty Friends</option>
                                                        <option>Dilraj Friends</option>
                                                        <option>All Friends</option>
                                                        <option>Web Friends</option>
                                                        <option>Mobile Friends</option>
                                                        <option>Arty Friends</option>
                                                        <option>Dilraj Friends</option>
                                                        <option>All Friends</option>
                                                        <option>Web Friends</option>
                                                        <option>Mobile Friends</option>
                                                        <option>Arty Friends</option>
                                                        <option>Dilraj Friends</option>
                                                    </select>
                                                    <div className="totol_invi_frid">
                                                        <p>Total Invite Friends <span className="valu_invit">152</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="send_reque-and-share">
                                                <div className="buton_send">
                                                    <Link to="#">Send Join Request</Link>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="share_fren_in">
                                                    <p><span className="share-icons">
                                                        <img src={share_icons} alt="" /></span>
                                                        <span className="share_name_text">Share</span></p>
                                                    <ul className="share_socila_icos">
                                                        <li><Link to="#"><img src={facebook} alt="" /></Link></li>
                                                        <li><Link to="#"><img src={facebook} alt="" /></Link></li>
                                                        <li><Link to="#"><img src={facebook} alt="" /></Link></li>
                                                    </ul>
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
                                                    <label for="message-text artic" className="form-control-label">Write  article Here...<span
                                                        className="art-writ_penc"><img src="images/write_art.png" alt="" /></span> </label>
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

export default Invite_Friends