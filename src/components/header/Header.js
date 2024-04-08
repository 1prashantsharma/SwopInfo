import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";
import search from "../../assets/images/icon/search.png";
import home from "../../assets/images/icon/home.png";
import newsfeed from "../../assets/images/icon/newsfeed.png";
import uploads from "../../assets/images/icon/uploads.png";
import following from "../../assets/images/icon/following.png";
import followers from "../../assets/images/icon/followers.png";
import groups from "../../assets/images/icon/groups.png";
import bookmarks from "../../assets/images/icon/bookmarks.png";
import more from "../../assets/images/icon/more.png";
import profile from "../../assets/images/profile-img.jpg";
const Header = () => {
    return (
        <div>
            <div className="top_strip">
                <div className="strip_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="logo-with_search">
                                    <div className="logo_part">
                                        <span><Link to="#">
                                            <img src={Logo} alt="swopinfo" /></Link></span>
                                    </div>
                                    <div className="search_box">
                                        <div className="input-group">
                                            <input type="hidden" name="search_param" value="all" id="search_param" />
                                            <input type="text" className="add_your_keyword" name="x" placeholder="Search..." />
                                            <span className="input-group-btn">
                                                <button className="search_text_filds" type="button">
                                                    <img src={search} alt="Swopinfo" /></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="all_menu">
                                    <nav className="navbar navbar-inverse">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                                        </div>
                                        <div id="navbar" className="navbar-collapse collapse">
                                            <ul className="nav navbar-nav navbar-right cusome">
                                                <li><Link to="/"><img src={home} alt="" /> Home </Link></li>
                                                <li><Link to="#"> <img src={newsfeed} alt="" /> Newsfeed</Link></li>
                                                <li><Link to="/Uploads"><img src={uploads} alt="" /> Uploads </Link></li>
                                                <li><Link to="/Following"><img src={following} alt="" />Following</Link></li>
                                                <li><Link to="/Followers"> <img src={followers} alt="" />Followers </Link></li>
                                                <li><Link to="/Groups"><img src={groups} alt="" />Groups  </Link></li>
                                                <li><Link to="/BookMarks"><img src={bookmarks} alt="" />Bookmarks </Link></li>
                                                <li className="dropdown">
                                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <img src={more} alt="" />More <span className="caret"></span></Link>
                                                    <ul className="dropdown-menu more_menu">
                                                        <li><Link to="#">More Links....</Link></li>
                                                        <li><Link to="#">More Links....</Link></li>
                                                        <li><Link to="#">More Links....</Link></li>
                                                        <li><Link to="#">More Links....</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown end_border">
                                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                        aria-haspopup="true" aria-expanded="false"><span className="profile_pic">
                                                            <img src={profile} alt="" /></span>Profile <span className="caret"></span></Link>
                                                    <ul className="dropdown-menu more_menu">
                                                        <li><Link to="#">More Links....</Link></li>
                                                        <li><Link to="#">More Links....</Link></li>
                                                        <li><Link to="#">More Links....</Link></li>
                                                        <li><Link to="#">More Links....</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header