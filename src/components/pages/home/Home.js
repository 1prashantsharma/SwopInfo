import React, { useState, useEffect } from 'react'
import "../../../assets/css/main.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/responsive_media.css";
import "../../../assets/css/fa-brands.css";
import "../../../assets/css/fa-regular.css";
import "../../../assets/css/fontawesome.css";
import "../../../assets/css/gallery.css";
import "../../../assets/css/lightbox.min.css";
import profile from "../../../assets/images/profile-img.jpg";
import add_img from "../../../assets/images/add_img.jpg";
import write_an_artical from "../../../assets/images/write-an_artical.png";
import image_file from "../../../assets/images/image_file.png";
import video from "../../../assets/images/video.jpg";
import write_art from "../../../assets/images/write_art.png";
import uploads_img from "../../../assets/images/uploads_img.jpg";
import likes from "../../../assets/images/post_icon/likes.jpg";
import comments from "../../../assets/images/post_icon/comments.jpg";
import share from "../../../assets/images/post_icon/share.jpg";
import profile_img from "../../../assets/images/profile-img.jpg";
import one_600 from "../../../assets/images/post/600-one.jpg";
import two_1000 from "../../../assets/images/post/1000-two.jpg";
import one_1000 from "../../../assets/images/post/1000-one.jpg";
import db9205f5a2_m from "../../../assets/images/post/4751713100_db9205f5a2_m.jpg";
import roseville_meeting from "../../../assets/images/post/roseville-meeting.jpg";
import one_1200 from "../../../assets/images/post/1200-one.jpg";
import fredtyler from "../../../assets/images/fredtyler.jpg";
import links_allreday from "../../../assets/images/links_allreday.jpg";
import add2 from "../../../assets/images/add2.png";
import f3 from "../../../assets/images/f3.jpg";
import f2 from "../../../assets/images/f2.jpg";
import f1 from "../../../assets/images/f1.jpg";
import gavinsimoen from "../../../assets/images/gavinsimoen.jpg";
import deborahtheron from "../../../assets/images/deborahtheron.jpg";
import { Link } from 'react-router-dom';
import Header from '../../header/Header';




const Home = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const header = document.getElementById("myHeader");
            const sticky = header.offsetTop;
            if (window.scrollY >= sticky) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // empty dependency array ensures that this effect runs only once

    return (

        <div className="main_page">
            {/* <--------------- This is Header sections -----------------> */}
            <Header />
            {/* <-------------- This is Middle Sections -------------------> */}
            <div className="middle_sections">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-3">
                                <div className="dd_auto_width">
                                    <div id="myHeader" className={isSticky ? "left_sections sticky" : ""}>
                                        <div className="profile_part">
                                            <div className="profile_bg">
                                                <div className="pro_img">
                                                    <div className="user_profile_ico">
                                                        <span><img src={profile} alt="" /></span>
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
                                            <Link to="#">
                                                <span><img src={add_img} alt="" /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feed_center">
                                    <div className="add_articlas">
                                        <div className="articls_titles">
                                            <p>Share an article, photo, video or idea...</p>
                                        </div>
                                        <div className="three_tabs_posting">
                                            <div className="write-an-articals">
                                                <div className="bnt_tabs">
                                                    <Link to="#" data-toggle="modal" data-target="#deleteProductModal" data-productid="3"
                                                        data-productname="Product 3"><span>
                                                            <img src={write_an_artical} alt="" /> Write an article</span></Link>
                                                </div>
                                            </div>
                                            <div className="uploads_img-set">
                                                <div className="zone">
                                                    <div id="dropZ">
                                                        <div className="selectFile">
                                                            <label for="file">
                                                                <img src={image_file} alt="" /> Images</label>
                                                            <input type="file" name="files[]" id="file" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post_videos">
                                                <div className="uploads_img-set">
                                                    <div className="zone_vidoes">
                                                        <div id="dropZ2">
                                                            <div className="selectFile">
                                                                <label for="file">
                                                                    <img src={video}
                                                                        alt="" /> video</label>
                                                                <input type="file" name="files[]" id="file" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post_bnt">
                                                <input type="submit" value="Post" className="bnt_at-post" />
                                            </div>
                                        </div>
                                        <div className="modal fade" id="deleteProductModal" tabindex="-1" role="dialog" aria-labelledby="deleteProductModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header custome_desing">
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="close_btn-teis">×</span></button>
                                                        <h4 className="modal-title" id="deleteProductModalLabel">Write an article</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <label for="message-text artic" className="form-control-label">Write
                                                            article Here...<span className="art-writ_penc">
                                                                <img src={write_art} alt="" />
                                                            </span> </label>
                                                        <textarea className="post_msg" placeholder="Write..."></textarea>
                                                        <div className="highlight-text">
                                                            <div className="track_bg">
                                                                <h1>
                                                                    WOULD YOU LIKE TO UPLOAD SOME FILES TOO? PERHAPS A YOUTUBE VIDEO?
                                                                </h1>
                                                                <p>Fill in the details below and click Add. If you are only adding some
                                                                    information then just click Add.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="first_lable_share">
                                                            <label>FOLDER NAME (NOT REQUIRED)</label>
                                                            <input type="text" className="folder-name" placeholder="Enter a Folder Name" /></div>
                                                        <div className="first_lable_share">
                                                            <label>TITLE</label>
                                                            <input type="text" className="folder-name" placeholder="Enter a title" /></div>
                                                        <div className="first_lable_share">
                                                            <label>DESCRIPTION</label>
                                                            <input type="text" className="folder-name" placeholder="Enter a description" /></div>
                                                        <div className="first_lable_share">
                                                            <label>TAGS</label>
                                                            <input type="text" className="folder-name" placeholder="Enter some tags" /></div>
                                                        <div className="select_options_tracks">
                                                            <div className="first-try-options">
                                                                <p>BROADCAST</p>
                                                                <label className="more_options">Public
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>
                                                                <label className="more_options">Private
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>
                                                            </div>
                                                            <div className="first-try-options">
                                                                <p>ALLOW COMMENTS</p>
                                                                <label className="more_options">Yes
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>
                                                                <label className="more_options">No
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>

                                                            </div>

                                                            <div className="first-try-options">
                                                                <p>ALLOW RATINGS</p>
                                                                <label className="more_options">Yes
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>
                                                                <label className="more_options">No
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>

                                                            </div>

                                                            <div className="first-try-options">
                                                                <p>ALLOW EMBEDDING</p>
                                                                <label className="more_options">Yes
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>
                                                                <label className="more_options">No
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>

                                                            </div>

                                                            <div className="first-try-options">
                                                                <p>ALLOW DOWNLOADS</p>
                                                                <label className="more_options">Yes
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>
                                                                <label className="more_options">No
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark-set"></span>
                                                                </label>

                                                            </div>





                                                        </div>

                                                        <div className="url_youtube">
                                                            <label>YOUTUBE VIDEO</label>

                                                            <input type="text" className="folder-name" placeholder="Enter Youtube URL..." /></div>
                                                        <div className="select_file-popup">

                                                            <div className="bnt_tabs-dds">
                                                                <Link to="#" data-toggle="modal" data-target="#deleteProductModal"
                                                                    data-productid="3" data-productname="Product 3"><span>
                                                                        <img src={write_an_artical} alt="" /> Select Files</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer bottome">
                                                        <button type="button" className="post_article_submit">Post</button>
                                                        <button type="button" className="bnt-cancel_defult" data-dismiss="modal">cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="feed_details">
                                        <div className="liks-post">
                                            <p><Link to="#">Shruti Sharma</Link> likes this</p>
                                        </div>
                                        <div className="profile_img">
                                            <span><img src={profile} alt="" /></span>
                                        </div>
                                        <div className="profile_name_detials">
                                            <h1>Mr , Gavin Simoen!</h1>
                                            <p>Co-Founder And CEO At Swopinfo</p>
                                        </div>
                                        <div className="full_post">
                                            <p><Link to="#">Kwikspar</Link> Riverbend GREEN TAG SALE 23Jan - 4TH Feb 2018</p>
                                        </div>
                                        <div className="uploads_img_full">
                                            <Link to="#"><img src={uploads_img} alt="" className="img-responsive" /></Link>
                                        </div>
                                        <div className="post-links_and_comments">
                                            <div className="liks_feeds">
                                                <p><Link to="#">256 Likes</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#">10 Comment</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#">360 Share</Link></p>
                                            </div>
                                        </div>
                                        <div className="li_co_sh">
                                            <div className="liks_feeds">
                                                <p><Link to="#"><img src={likes} alt="" />  Likes</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={comments} alt="" /> Comment</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={share} alt="" />Share</Link></p>
                                            </div>
                                        </div>
                                        <div className="post_links_comments">
                                            <div className="profile_part_commnets">
                                                <span><img src={profile_img} alt="" /></span>
                                            </div>
                                            <div className="name_commenter">
                                                <p><span>Sam Petzer</span> welcome them by viewing their profile!!!</p>
                                                <ul>
                                                    <li><Link to="#">Like</Link></li>
                                                    <li><Link to="#">Reply</Link></li>
                                                </ul>
                                            </div>
                                            <div className="comment_text_filds">
                                                <div className="comm_text_filds">
                                                    <div className="user_pro_comg">
                                                        <span><img src={profile_img} alt="" /></span>
                                                    </div>
                                                    <div className="text_filds_com">
                                                        <form>
                                                            <input type="text" placeholder="Add a Comment..." className="add_comments" />
                                                        </form>
                                                    </div>
                                                    <div className="post_btn">
                                                        <input type="button" value="Post" className="post_vale_taree" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feed_details arty">
                                        <div className="profile_img">
                                            <span><img src={profile_img} alt="" /></span>
                                        </div>
                                        <div className="profile_name_detials">
                                            <h1>Sam Petzer</h1>
                                            <p>Shared some info!</p>
                                        </div>
                                        <div className="full_post">
                                            <p><Link to="#">@GordonGraham loving</Link>  the tunes today!!! :)#livestream #swoplive #lovingit</p>
                                        </div>
                                        <div className="uploads_img_full">
                                            <div className="multipla_img_views">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="first-img_views ">
                                                            <span><Link to="#">
                                                                <img src={one_600}
                                                                    alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="first-img_views single_one-top">
                                                            <span><Link to="#">
                                                                <img src={two_1000}
                                                                    alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-links_and_comments">
                                            <div className="liks_feeds">
                                                <p><Link to="#">23 Likes</Link></p>
                                            </div>
                                        </div>
                                        <div className="li_co_sh">
                                            <div className="liks_feeds">
                                                <p><Link to="#"><img src={likes} alt="" />  Likes</Link></p>

                                            </div>

                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={comments} alt="" /> Comment</Link></p>

                                            </div>

                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={share} alt="" />Share</Link></p>

                                            </div>


                                        </div>




                                    </div>

                                    <div className="feed_details arty">


                                        <div className="profile_img">
                                            <span><img src={profile_img} alt="" /></span>


                                        </div>

                                        <div className="profile_name_detials">
                                            <h1>Sam Petzer</h1>
                                            <p>Shared some info!</p>
                                        </div>
                                        <div className="full_post">
                                            <p><Link to="#">@GordonGraham loving</Link>  the tunes today!!! :)#livestream #swoplive #lovingit</p>
                                        </div>
                                        <div className="uploads_img_full">
                                            <div className="multipla_img_views">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="first-img_views">
                                                            <span><Link to="#">
                                                                <img src={one_600} alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="first-img_views">
                                                            <span><Link to="#">
                                                                <img src={one_600} alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="first-img_views">
                                                            <span><Link to="#">
                                                                <img src={one_600} alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="first-img_views">
                                                            <span><Link to="#"><img src={one_600} alt="" className="img-responsive" /></Link></span>
                                                            <div className="poing_views">
                                                                <Link to="#" className="text_view_images">+22</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-links_and_comments">
                                            <div className="liks_feeds">
                                                <p><Link to="#">23 Likes</Link></p>
                                            </div>
                                        </div>
                                        <div className="li_co_sh">
                                            <div className="liks_feeds">
                                                <p><Link to="#"><img src={likes} alt="" />  Likes</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={comments} alt="" /> Comment</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={share} alt="" />Share</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feed_details arty">
                                        <div className="profile_img">
                                            <span><img src={profile_img} alt="" /></span>
                                        </div>
                                        <div className="profile_name_detials">
                                            <h1>Sam Petzer</h1>
                                            <p>Shared some info!</p>
                                        </div>
                                        <div className="full_post">
                                            <p><Link to="#">@GordonGraham loving</Link>  the tunes today!!! :)#livestream #swoplive #lovingit</p>
                                        </div>
                                        <div className="uploads_img_full">
                                            <div className="multipla_img_views">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="first-img_views">
                                                            <span><Link to="#"><img src={one_1000} alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="first-img_views">
                                                            <span><Link to="#"><img src={two_1000} alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-links_and_comments">
                                            <div className="liks_feeds">
                                                <p><Link to="#">23 Likes</Link></p>
                                            </div>
                                        </div>
                                        <div className="li_co_sh">
                                            <div className="liks_feeds">
                                                <p><Link to="#"><img src={likes} alt="" />  Likes</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={comments} alt="" /> Comment</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={share} alt="" />Share</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feed_details arty">
                                        <div className="profile_img">
                                            <span><img src={profile_img} alt="" /></span>
                                        </div>
                                        <div className="profile_name_detials">
                                            <h1>Sam Petzer</h1>
                                            <p>Shared some info!</p>
                                        </div>
                                        <div className="full_post">
                                            <p><Link to="#">@GordonGraham loving</Link>  the tunes today!!! :)#livestream #swoplive #lovingit</p>
                                        </div>
                                        <div className="uploads_img_full">
                                            <div className="multipla_img_views three-views">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="first-img_views single_views_vartical">
                                                            <span><Link to="#"><img src={one_1000} alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="first-img_views single_one">
                                                                    <span><Link to="#">
                                                                        <img
                                                                            src={db9205f5a2_m} alt="" className="img-responsive" /></Link></span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="first-img_views single_one">
                                                                    <span><Link to="#">
                                                                        <img
                                                                            src={roseville_meeting} alt="" className="img-responsive" /></Link></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-links_and_comments">
                                            <div className="liks_feeds">
                                                <p><Link to="#">23 Likes</Link></p>
                                            </div>
                                        </div>
                                        <div className="li_co_sh">
                                            <div className="liks_feeds">
                                                <p><Link to="#"><img src={likes} alt="" />  Likes</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={comments} alt="" /> Comment</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={share} alt="" />Share</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feed_details arty">
                                        <div className="profile_img">
                                            <span><img src={profile_img} alt="" /></span>
                                        </div>
                                        <div className="profile_name_detials">
                                            <h1>Sam Petzer</h1>
                                            <p>Shared some info!</p>
                                        </div>
                                        <div className="full_post">
                                            <p><Link to="#">@GordonGraham loving</Link>  the tunes today!!! :)#livestream #swoplive #lovingit</p>
                                        </div>
                                        <div className="uploads_img_full">
                                            <div className="multipla_img_views">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="first-img_views">
                                                            <span><Link to="#">
                                                                <img src={one_1200} alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="first-img_views">
                                                            <span><Link to="#">
                                                                <img src={one_1200} alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-links_and_comments">
                                            <div className="liks_feeds">
                                                <p><Link to="#">23 Likes</Link></p>
                                            </div>
                                        </div>
                                        <div className="li_co_sh">
                                            <div className="liks_feeds">
                                                <p><Link to="#">
                                                    <img src={likes} alt="" />  Likes</Link></p>
                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={comments} alt="" /> Comment</Link></p>

                                            </div>
                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={share} alt="" />Share</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feed_details arty">
                                        <div className="profile_img">
                                            <span><img src={profile_img} alt="" /></span>
                                        </div>
                                        <div className="profile_name_detials">
                                            <h1>Sam Petzer</h1>
                                            <p>Shared some info!</p>
                                        </div>
                                        <div className="full_post">
                                            <p><Link to="#">@GordonGraham loving</Link>  the tunes today!!! :)#livestream #swoplive #lovingit</p>
                                        </div>
                                        <div className="uploads_img_full">
                                            <div className="multipla_img_views">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="first-img_views">
                                                            <span><Link to="#">
                                                                <img src={one_1200} alt="" className="img-responsive" /></Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="first-img_views">
                                                                    <span><Link to="#">
                                                                        <img src={two_1000} alt="" className="img-responsive" /></Link></span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="first-img_views">
                                                                    <span><Link to="#">
                                                                        <img src={two_1000} alt="" className="img-responsive" /></Link></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-links_and_comments">
                                            <div className="liks_feeds">
                                                <p><Link to="#">23 Likes</Link></p>

                                            </div>






                                        </div>

                                        <div className="li_co_sh">

                                            <div className="liks_feeds">
                                                <p><Link to="#"><img src={likes} alt="" />  Likes</Link></p>

                                            </div>

                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={comments} alt="" /> Comment</Link></p>

                                            </div>

                                            <div className="comment_feeds">
                                                <p><Link to="#"><img src={share} alt="" />Share</Link></p>

                                            </div>


                                        </div>




                                    </div>


                                    <div className="feed_details">


                                        <div className="add_people">

                                            <p className="pelo_know">People you may know</p>

                                            <div className="first_box_people">
                                                <div className="profile_peno">
                                                    <span><img src={fredtyler} alt="" /></span>

                                                </div>
                                                <div className="name_post-know">
                                                    <h1> Dr. Fred Tyler </h1>
                                                    <p>Co-Founder & CEO</p>
                                                    <span> <img src={links_allreday} alt="" /> 30 shared connections</span>
                                                </div>
                                                <div className="know_add">
                                                    <form>
                                                        <input type="button" value="+ Add" className="add_peopl_know" />
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="first_box_people">
                                                <div className="profile_peno">
                                                    <span><img src={deborahtheron} alt="" /></span>
                                                </div>
                                                <div className="name_post-know">
                                                    <h1> Deborah Theron </h1>
                                                    <p> CEO</p>
                                                    <span> <img src={links_allreday} alt="" /> 30 shared connections</span>
                                                </div>
                                                <div className="know_add">
                                                    <form>
                                                        <input type="button" value="+ Add" className="add_peopl_know" />
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="first_box_people">
                                                <div className="profile_peno">
                                                    <span><img src={gavinsimoen} alt="" /></span>
                                                </div>
                                                <div className="name_post-know">
                                                    <h1> Gavin Simoen </h1>
                                                    <p>Co-Founder & CEO</p>
                                                    <span> <img src={links_allreday} alt="" /> 30 shared connections</span>
                                                </div>
                                                <div className="know_add">
                                                    <form>
                                                        <input type="button" value="+ Add" className="add_peopl_know" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="view_more_loading">
                                            <p><Link to="#">View more...</Link></p>
                                        </div>
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
                                                <div>
                                                    <div className="name_folo-usera">
                                                        <p>Petra Simoen</p>
                                                        <Link to="#">View</Link>
                                                    </div>
                                                    <div className="folo_bnt">
                                                        <Link to="#"> Follow </Link>
                                                    </div>
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


    )
}

export default Home