import React from 'react'
import Header from '../../header/Header';
import "../../../assets/css/main.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/responsive_media.css";
import logo from "../../../assets/images/logo.png";
import map from "../../../assets/images/map.png";
import tell from "../../../assets/images/edit_profile/tell.png";
import fax from "../../../assets/images/edit_profile/fax.png";
import country from "../../../assets/images/edit_profile/country.png";
import facebook from "../../../assets/images/edit_profile/facebook.png";
import twtter from "../../../assets/images/edit_profile/twtter.png";
import add_img from "../../../assets/images/add_img.jpg";
import write_an_artical from "../../../assets/images/write-an_artical.png";
import image_file from "../../../assets/images/image_file.png";
import video from "../../../assets/images/video.jpg";
import write_art from "../../../assets/images/write_art.png";
import profile_img from "../../../assets/images/profile-img.jpg";
import uploads_img from "../../../assets/images/uploads_img.jpg";
import likes from "../../../assets/images/post_icon/likes.jpg";
import comments from "../../../assets/images/post_icon/comments.jpg";
import share from "../../../assets/images/post_icon/share.jpg";
import profilepic from "../../../assets/images/profilepic.jpg";
import post_two from "../../../assets/images/post-two.jpg";
import fredtyler from "../../../assets/images/fredtyler.jpg";
import links_allreday from "../../../assets/images/links_allreday.jpg";
import deborahtheron from "../../../assets/images/deborahtheron.jpg";
import gavinsimoen from "../../../assets/images/gavinsimoen.jpg";
import f1 from "../../../assets/images/f1.jpg";
import f2 from "../../../assets/images/f2.jpg";
import f3 from "../../../assets/images/f3.jpg";
import add2 from "../../../assets/images/add2.png";
const Business_Profile = () => {
  return (
    <div>
       <div class="main_page">
{/* <------------ This is Header Sections -----------------> */}
<Header/>
<div class="middle_sections">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="left_sections">
<div class="profile_part">
<div class="profile_bg">
<div class="pro_img">
<div class="user_profile_ico">
<span><img src={logo} alt=""/></span>
</div>
</div>
</div>
<div class="follow_business_profile">
<a href="#">Follow</a>
</div>
<div class="name-account-holder">
<div class="comp-addre">
<p>Company Address:</p>
<a href="#"> <img src={map} alt=""/> Suite 5, The Hub, Beacon Bay
East London
South Africa
5201</a>
</div>
</div>
<div class="name-account-holder">
<p>Contact Numbers:</p>
<div class="cont_busines_prof">
<p><img src={tell} alt=""/> Telephone 1: 0437484230</p>
<p><img src={tell} alt=""/> Telephone 2: 0824706017</p>
<p><img src={fax} alt=""/> Fax: 0865804170</p>
</div>
</div>
<div class="name-account-holder">
<p>Links:</p>
<div class="cont_busines_prof">
<p><img src={country} alt=""/><a href="#"> Website</a>
</p>
<p><img src={facebook} alt=""/><a href="#"> Facebook</a>
</p>
<p><img src={twtter} alt=""/><a href="#"> Twitter</a></p>
</div>
</div>
<div class="connetct_newworkd" style={{border:"none"}} >
<span>120</span>
<p><a href="#" class="who-provisit">Who's viewed your profile</a></p>
</div>
</div>
<div class="add_space">
<a href="javascript:void(0)"><span>
    <img src={add_img} alt=""/></span></a>
</div>
</div>
<div class="feed_center">
<div class="add_articlas">
<div class="articls_titles">
<p>Share an article, photo, video or idea...</p>
</div>
<div class="three_tabs_posting">
<div class="write-an-articals">
<div class="bnt_tabs">
<a href="#" data-toggle="modal" data-target="#deleteProductModal" data-productid="3" 
data-productname="Product 3"><span>
    <img src={write_an_artical} alt=""/> Write an article</span></a>
</div>
</div>
<div class="uploads_img-set">
<div class="zone">
  <div id="dropZ">
    <div class="selectFile">       
      <label for="file"><img src={image_file} alt=""/> Images</label>                   
      <input type="file" name="files[]" id="file"/>
    </div>
 
  </div>
</div>
</div>
<div class="post_videos">
<div class="uploads_img-set">
<div class="zone_vidoes">
  <div id="dropZ2">
    <div class="selectFile">       
      <label for="file"><img src={video} alt=""/> video</label>                   
      <input type="file" name="files[]" id="file"/>
    </div>
  </div>
</div>
</div>
</div>
<div class="post_bnt">
<input type="submit" value="Post" class="bnt_at-post"/>
</div>
</div>
<div class="modal fade" id="deleteProductModal" tabindex="-1" role="dialog"
 aria-labelledby="deleteProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header custome_desing">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="close_btn-teis">×</span></button>
        <h4 class="modal-title" id="deleteProductModalLabel">Write an article</h4>
      </div>
      <div class="modal-body">
        <label for="message-text artic" class="form-control-label">Write  article Here...<span 
        class="art-writ_penc"><img src={write_art} alt=""/></span> </label>
        <textarea class="post_msg" placeholder="Write..."></textarea>
        <div class="highlight-text">
        <div class="track_bg">
        <h1>
      WOULD YOU LIKE TO UPLOAD SOME FILES TOO? PERHAPS A YOUTUBE VIDEO?
        </h1>
        <p>Fill in the details below and click Add. If you are only adding some information then just click Add.
</p>
        </div>
        </div>
        <div class="first_lable_share">
        <label>FOLDER NAME (NOT REQUIRED)</label>
        <input type="text" class="folder-name" placeholder="Enter a Folder Name"/></div>
        <div class="first_lable_share">
        <label>TITLE</label>
        <input type="text" class="folder-name" placeholder="Enter a title"/></div>
        <div class="first_lable_share">
        <label>DESCRIPTION</label>
        <input type="text" class="folder-name" placeholder="Enter a description"/></div>
        <div class="first_lable_share">
        <label>TAGS</label>
        <input type="text" class="folder-name" placeholder="Enter some tags"/></div>
        <div class="select_options_tracks">
       <div class="first-try-options">
       <p>BROADCAST</p>
       <label class="more_options">Public
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
<label class="more_options">Private
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
</div>
<div class="first-try-options">
       <p>ALLOW COMMENTS</p>
       <label class="more_options">Yes
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
<label class="more_options">No
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
</div>
       <div class="first-try-options">
       <p>ALLOW RATINGS</p>
       <label class="more_options">Yes
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
<label class="more_options">No
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
</div>
<div class="first-try-options">
       <p>ALLOW EMBEDDING</p>
       <label class="more_options">Yes
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
<label class="more_options">No
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
</div>
<div class="first-try-options">
       <p>ALLOW DOWNLOADS</p>
       <label class="more_options">Yes
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
<label class="more_options">No
  <input type="checkbox"/>
  <span class="checkmark-set"></span>
</label>
</div>
        </div>
        <div class="url_youtube">
        <label>YOUTUBE VIDEO</label>
        <input type="text" class="folder-name" placeholder="Enter Youtube URL..."/></div>
        <div class="select_file-popup">
<div class="bnt_tabs-dds">
<a href="#" data-toggle="modal" data-target="#deleteProductModal" 
data-productid="3" data-productname="Product 3"><span>
    <img src={write_an_artical} alt=""/> Select Files</span></a>
</div>
</div>
      </div>
      <div class="modal-footer bottome">
        <button type="button" class="post_article_submit">Post</button>
        <button type="button" class="bnt-cancel_defult" data-dismiss="modal">cancel</button>        
      </div>
    </div>
  </div>
</div>
</div>
<div class="clearfix"></div>
<div class="feed_details">
<div class="liks-post">
<p><a href="#">Shruti Sharma</a> likes this</p>
</div>
<div class="profile_img">
<span><img src={profile_img} alt=""/></span>
</div>
<div class="profile_name_detials">
<h1>Mr , Gavin Simoen!</h1>
<p>Co-Founder And CEO At Swopinfo</p>
</div>
<div class="full_post">
<p><a href="#">Kwikspar</a> Riverbend GREEN TAG SALE 23Jan - 4TH Feb 2018</p>
</div>
<div class="uploads_img_full">
<a href="#"><img src={uploads_img} alt="" class="img-responsive"/></a>
</div>
<div class="post-links_and_comments">
<div class="liks_feeds">
<p><a href="#">256 Likes</a></p>
</div>
<div class="comment_feeds">
<p><a href="#">10 Comment</a></p>
</div>
<div class="comment_feeds">
<p><a href="#">360 Share</a></p>
</div>
</div>
<div class="li_co_sh">
<div class="liks_feeds">
<p><a href="#"><img src={likes} alt=""/>  Likes</a></p>
</div>
<div class="comment_feeds">
<p><a href="#"><img src={comments} alt=""/> Comment</a></p>
</div>
<div class="comment_feeds">
<p><a href="#"><img src={share} alt=""/>Share</a></p>
</div>
</div>
<div class="post_links_comments">
<div class="profile_part_commnets">
<span><img src={profile_img} alt=""/></span>
</div>
<div class="name_commenter">
<p><span>Sam Petzer</span> welcome them by viewing their profile!!!</p>
<ul>
<li><a href="#">Like</a></li>
<li><a href="#">Reply</a></li>
</ul>
</div>
<div class="comment_text_filds">
<div class="comm_text_filds">
<div class="user_pro_comg">
<span><img src={profile_img} alt=""/></span>
</div>
<div class="text_filds_com">
<form>
<input type="text" placeholder="Add a Comment..." class="add_comments"/>
</form>
</div>
<div class="post_btn">
<input type="button" value="Post" class="post_vale_taree"/>
</div>
</div>
</div>
</div>
</div>
<div class="feed_details arty">
<div class="profile_img">
<span><img src={profilepic} alt=""/></span>
</div>
<div class="profile_name_detials">
<h1>Sam Petzer</h1>
<p>Shared some info!</p>
</div>
<div class="full_post">
<p><a href="#">@GordonGraham loving</a>  the tunes today!!! :)#livestream #swoplive #lovingit</p>
</div>
<div class="uploads_img_full">
<a href="#"><img src={post_two} alt="" class="img-responsive"/></a>
</div>
<div class="post-links_and_comments">
<div class="liks_feeds">
<p><a href="#">23 Likes</a></p>
</div>
</div>
<div class="li_co_sh">
<div class="liks_feeds">
<p><a href="#"><img src={likes} alt=""/>  Likes</a></p>
</div>
<div class="comment_feeds">
<p><a href="#"><img src={comments} alt=""/> Comment</a></p>
</div>
<div class="comment_feeds">
<p><a href="#"><img src={share} alt=""/>Share</a></p>
</div>
</div>
</div>
<div class="feed_details">
<div class="add_people">
<p class="pelo_know">People you may know</p>
<div class="first_box_people">
<div class="profile_peno">
<span><img src={fredtyler} alt=""/></span>
</div>
<div class="name_post-know">
<h1> Dr. Fred Tyler </h1>
<p>Co-Founder & CEO</p>
<span> <img src={links_allreday} alt=""/> 30 shared connections</span>
</div>
<div class="know_add">
<form>
<input type="button" value="+ Add" class="add_peopl_know"/>
</form>
</div>
</div>
<div class="first_box_people">
<div class="profile_peno">
<span><img src={deborahtheron} alt=""/></span>
</div>
<div class="name_post-know">
<h1> Deborah Theron </h1>
<p> CEO</p>
<span> <img src={links_allreday} alt="" /> 30 shared connections</span>
</div>
<div class="know_add">
<form>
<input type="button" value="+ Add" class="add_peopl_know"/>
</form>
</div>
</div>
<div class="first_box_people">
<div class="profile_peno">
<span><img src={gavinsimoen} alt=""/></span>
</div>
<div class="name_post-know">
<h1> Gavin Simoen </h1>
<p>Co-Founder & CEO</p>
<span> <img src={links_allreday} alt="" /> 30 shared connections</span>
</div>
<div class="know_add">
<form>
<input type="button" value="+ Add" class="add_peopl_know"/>
</form>
</div>
</div>
</div>
<div class="view_more_loading">
<p><a href="#">View more...</a></p>
</div>
</div>
</div>
<div class="right_part-set">
<div class="right_sections">
<div class="add_feed_bg">
<div class="articls_titles">
<p>Add to your feed</p>
</div>
<div class="first_folo_users">
<div class="img_folo_uer">
<span><img src={f1} alt=""/></span>
</div>
<div class="name_folo-usera">
<p>Petra Simoen</p>
<a href="#">View</a>
</div>
<div class="folo_bnt">
<a href="#"> Follow </a>
</div>
</div>
<div class="first_folo_users">
<div class="img_folo_uer">
<span><img src={f2} alt=""/></span>
</div>
<div class="name_folo-usera">
<p>Albert Strydom</p>
<a href="#">View</a>
</div>
<div class="folo_bnt">
<a href="#"> Follow </a>
</div>
</div>
<div class="first_folo_users">
<div class="img_folo_uer">
<span><img src={f3} alt=""/></span>
</div>
<div class="name_folo-usera">
<p>Carraig James</p>
<a href="#">View</a>
</div>
<div class="folo_bnt">
<a href="#"> Follow </a>
</div>
</div>
<div class="view_all_folo_wid">
<a href="#"> View all </a> 
</div>
</div>
</div>
<div class="right_sections">
<div class="company_ro_links">
<div class="add_feed_bg">
<div class="links_right_fol_trak">
<ul>
<li><a href="#">About us</a></li>
<li><a href="#">Help Center  </a></li>
<li><a href="#"> Privacy & Terms</a></li>
<li><a href="#"> Business Services </a></li>
<li><a href="#"> Terms and conditions</a></li>
<li><a href="#"> Get the Swopinfo app</a></li>
</ul>
</div>
<div class="copyright_text">
<p>© 2018 - <a href="#">SwopInfo.com</a> <br/>
All rights reserved.</p>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
</div>
</div>
<div class="add_sections">
<img src={add2} alt="" class="img-responsive"/>
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

export default Business_Profile