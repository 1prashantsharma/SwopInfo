import React from 'react'
import Header from '../../header/Header';
import "../../../assets/css/main.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/responsive_media.css";
import { Link } from 'react-router-dom';
import profile_img from "../../../assets/images/profile-img.jpg";
import add_img from "../../../assets/images/add_img.jpg";
import pri1 from "../../../assets/images/pri1.jpg";
import pri3 from "../../../assets/images/pri3.jpg";
import pri2 from "../../../assets/images/pri2.jpg";
import pri4 from "../../../assets/images/pri4.jpg";
import f1 from "../../../assets/images/f1.jpg";
import f2 from "../../../assets/images/f2.jpg";
import f3 from "../../../assets/images/f3.jpg";
import add2 from "../../../assets/images/add2.png";
const SwopInfo_Trends = () => {
    return (
        <div>
            <div className="main_page">
                {/* <------------ This is Header Sections -----------------> */}
                <Header />
                <div className="middle_sections">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-3">
                                    <div className="dd_auto_width">
                                        <div className="left_sections sticky" id="myHeader">
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
                                            <div className="add_space">
                                                <Link to="#"><span>
                                                    <img src={add_img} alt="" /></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="first_row">
                                        <div className="usr_p_img">
                                            <span><img src={pri1} alt="" className="img-circle" /></span>
                                        </div>
                                        <div className="name-port_user">
                                            <p>#Swopinfo</p>
                                            <span>540 Post</span>
                                        </div>
                                    </div>
                                    <div className="first_row">
                                        <div className="usr_p_img">
                                            <span><img src={pri3} alt="" className="img-circle" /></span>
                                        </div>
                                        <div className="name-port_user">
                                            <p>#Swopinfo</p>
                                            <span>540 Post</span>
                                        </div>
                                    </div>
                                    <div className="first_row">
                                        <div className="usr_p_img">
                                            <span><img src={pri2} alt="" className="img-circle" /></span>
                                        </div>
                                        <div className="name-port_user">
                                            <p>#Parasme Software and</p>
                                            <span>540 Post</span>
                                        </div>
                                    </div>
                                    <div className="first_row">
                                        <div className="usr_p_img">
                                            <span><img src={pri4} alt="" className="img-circle" /></span>
                                        </div>
                                        <div className="name-port_user">
                                            <p>#Swopinfo</p>
                                            <span>540 Post</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="right_part-set">
                                        <div className="right_sections">
                                            <div className="add_feed_bg">
                                                <div className="articls_titles">
                                                    <p>Add to your feed</p>
                                                </div>
                                                <div className="first_folo_users">
                                                    <div className="img_folo_uer">
                                                        <span><img src={f1} alt="" /></span>
                                                    </div>
                                                    <div className="name_folo-usera">
                                                        <p>Petra Simoen</p>
                                                        <Link to="#">View</Link>
                                                    </div>
                                                    <div className="folo_bnt">
                                                        <Link to="#"> Follow </Link>
                                                    </div>
                                                </div>
                                                <div className="first_folo_users">
                                                    <div className="img_folo_uer">
                                                        <span><img src={f2} alt="" /></span>
                                                    </div>
                                                    <div className="name_folo-usera">
                                                        <p>Albert Strydom</p>
                                                        <Link to="#">View</Link>
                                                    </div>
                                                    <div className="folo_bnt">
                                                        <Link to="#"> Follow </Link>
                                                    </div>
                                                </div>
                                                <div className="first_folo_users">
                                                    <div className="img_folo_uer">
                                                        <span><img src={f3} alt="" /></span>
                                                    </div>
                                                    <div className="name_folo-usera">
                                                        <p>Carraig James</p>
                                                        <Link to="#">View</Link>
                                                    </div>
                                                    <div className="folo_bnt">
                                                        <Link to="#"> Follow </Link>
                                                    </div>
                                                </div>
                                                <div className="view_all_folo_wid">
                                                    <Link to="#"> View all </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right_sections">
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
                                        <div className="add_sections">
                                            <img src={add2} alt="" className="img-responsive" />
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

export default SwopInfo_Trends