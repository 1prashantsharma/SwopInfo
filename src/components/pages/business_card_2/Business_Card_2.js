import React from 'react'

const Business_Card_2 = () => {
    return (
        <div>
            <div className="main_page">
                <div className="top_strip">
                    <div className="strip_bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="logo-with_search">
                                        <div className="logo_part">
                                            <span><a href="#"><img src="images/logo.png" alt="swopinfo"/></a></span>
                                        </div>
                                        <div className="search_box">
                                            <div className="input-group">
                                                <input type="hidden" name="search_param" value="all" id="search_param"/>
                                                    <input type="text" className="add_your_keyword" name="x" placeholder="Search..."/>
                                                        <span className="input-group-btn">
                                                            <button className="search_text_filds" type="button">
                                                                <img src="images/icon/search.png" alt="Swopinfo"/></button>
                                                        </span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="all_menu">
                                            <nav className="navbar navbar-inverse">

                                                <div className="navbar-header">
                                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
                                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar"> 
                                                    <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span>
                                                     <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                                                </div>
                                                <div id="navbar" className="navbar-collapse collapse">
                                                    <ul className="nav navbar-nav navbar-right cusome">
                                                        <li><a href="#"><img src="images/icon/home.png" alt="" /> Home </a></li>
                                                        <li><a href="#"> <img src="images/icon/newsfeed.png" alt="" /> Newsfeed</a></li>
                                                        <li><a href="#"><img src="images/icon/uploads.png" alt="" /> Uploads </a></li>
                                                        <li><a href="#"><img src="images/icon/following.png" alt="" />Following</a></li>
                                                        <li><a href="#"> <img src="images/icon/followers.png" alt="" />Followers </a></li>
                                                        <li><a href="#"><img src="images/icon/groups.png" alt="" />Groups  </a></li>
                                                        <li><a href="#"><img src="images/icon/bookmarks.png" alt="" />Bookmarks </a></li>
                                                        <li className="dropdown">
                                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" 
                                                            role="button" aria-haspopup="true" aria-expanded="false">
                                                                <img src="images/icon/more.png" alt="" />More <span className="caret">
                                                                    </span></a>
                                                            <ul className="dropdown-menu more_menu">
                                                                <li><a href="#">More Links....</a></li>
                                                                <li><a href="#">More Links....</a></li>
                                                                <li><a href="#">More Links....</a></li>
                                                                <li><a href="#">More Links....</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown end_border">
                                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                             aria-haspopup="true" aria-expanded="false"><span className="profile_pic">
                                                                <img src="images/profile-img.jpg" alt=""/></span>Profile <span className="caret"></span></a>
                                                            <ul className="dropdown-menu more_menu">
                                                                <li><a href="#">More Links....</a></li>
                                                                <li><a href="#">More Links....</a></li>
                                                                <li><a href="#">More Links....</a></li>
                                                                <li><a href="#">More Links....</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!--/.container-fluid --> */}
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middle_sections">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="left_sections">
                                        <div className="profile_part">
                                            <div className="profile_bg">
                                                <div className="pro_img">
                                                    <div className="user_profile_ico">
                                                        <span><img src="images/profile-img.jpg" alt=""/></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="name-account-holder">
                                                <p>Welcome , Gavin Simoen!</p>
                                                <a href="#">Update your profile</a>
                                            </div>
                                            <div className="connetct_newworkd">
                                                <span>790</span>
                                                <a href="#">Connections</a>
                                                <p>Grow your network</p>
                                            </div>
                                            <div className="connetct_newworkd" style={{border:"none"}}>
                                                <span>120</span>
                                                <p><a href="#" className="who-provisit">Who's viewed your profile</a></p>
                                            </div>
                                        </div>
                                        <div className="add_space">
                                            <a href="javascript:void(0)"><span><img src="images/add_img.jpg" alt=""/></span></a>
                                        </div>
                                    </div>
                                    <div className="feed_center">
                                        <div className="add_articlas">
                                            <div className="business_card">
                                                <div className="left_name_select">
                                                    <p>Select card to display:</p>
                                                </div>
                                                <div className="right_select_cardtype">
                                                    <select className="select-carttyp form-control">
                                                        <option selected="Default Card">Default Card</option>
                                                        <option value="Uploaded Card">Uploaded Card</option>
                                                    </select>
                                                </div>
                                                <br/>
                                                    <br/>
                                                    </div>
                                            </div>
                                            <div className="main_business_cart">
                                                <div className="profile_img_card">
                                                    <div className="img_card_track">
                                                        <span><img src="images/profile-img.jpg" alt=""/></span>
                                                    </div>
                                                </div>
                                                <div className="nave_card_title">
                                                    <h1>GAVIN SIMOEN</h1>
                                                    <p>Advertising And Marketing</p>
                                                    <span>(SWOPINFO.COM)</span>
                                                </div>
                                                <div className="full_detail_card">
                                                    <div className="poin_bg">
                                                        <span><img src="images/email.png" alt=""/></span>
                                                        <p className="nav_filds">gavin@swopinfo.com</p>
                                                    </div>
                                                    <div className="poin_bg" style={{backgroundColor:"#b2d22f"}}>
                                                        <span><img src="images/cell.png" alt=""/></span>
                                                        <p className="nav_filds">0824706017</p>
                                                    </div>
                                                    <div className="poin_bg" style={{backgroundColor:"#3fb0b8"}} >
                                                        <span><img src="images/telephone.png" alt=""/></span>
                                                        <p className="nav_filds">0437484230</p>
                                                    </div>
                                                    <div className="poin_bg" style={{backgroundColor:"#015077"}} >
                                                        <span><img src="images/fax.png" alt=""/></span>
                                                        <p className="nav_filds">0865804170</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="add_and_removecard">
                                                <div className="btn_card">
                                                    <input type="button" value="Upload your Won" className="won_card_uplads"/>

                                                        <input type="button" value="Remove Card" className="remove_card"/>
                                                            <div className="socia_icons_card">
                                                                <img src="images/social.png" alt=""/>

                                                            </div>

                                                        </div>
                                                        <br/>
                                                            <br/>
                                                                <br/>
                                                                    <br/>
                                                                        <br/>
                                                                            <br/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="right_part-set">
                                                                            <div className="right_sections">
                                                                                <div className="add_feed_bg">
                                                                                    <div className="articls_titles">
                                                                                        <p>Add to your feed</p>
                                                                                    </div>
                                                                                    <div className="first_folo_users">
                                                                                        <div className="img_folo_uer">
                                                                                            <span><img src="images/f1.jpg" alt=""/></span>
                                                                                        </div>
                                                                                        <div className="name_folo-usera">
                                                                                            <p>Petra Simoen</p>
                                                                                            <a href="#">View</a>
                                                                                        </div>
                                                                                        <div className="folo_bnt">
                                                                                            <a href="#"> Follow </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="first_folo_users">
                                                                                        <div className="img_folo_uer">
                                                                                            <span><img src="images/f2.jpg" alt=""/></span>
                                                                                        </div>
                                                                                        <div className="name_folo-usera">
                                                                                            <p>Albert Strydom</p>
                                                                                            <a href="#">View</a>
                                                                                        </div>
                                                                                        <div className="folo_bnt">
                                                                                            <a href="#"> Follow </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="first_folo_users">
                                                                                        <div className="img_folo_uer">
                                                                                            <span>
                                                                                                <img src="images/f3.jpg" alt=""/></span>
                                                                                        </div>
                                                                                        <div className="name_folo-usera">
                                                                                            <p>Carraig James</p>
                                                                                            <a href="#">View</a>
                                                                                        </div>
                                                                                        <div className="folo_bnt">
                                                                                            <a href="#"> Follow </a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="view_all_folo_wid">
                                                                                        <a href="#"> View all </a>
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

                                            export default Business_Card_2