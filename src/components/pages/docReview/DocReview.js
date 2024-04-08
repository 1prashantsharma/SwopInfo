import React from 'react'
import Header from '../../header/Header'
import profile_img from "../../../assets/images/profile-img.jpg";
import add_img from "../../../assets/images/add_img.jpg";
import noraml from "../../../assets/images/noraml.png";
import dis_likenoral from "../../../assets/images/dis-likenoral.png";
import docview from "../../../assets/images/docview.jpg";
import Facebook from "../../../assets/images/social/Facebook.png";
import Gmail from "../../../assets/images/social/Gmail.png";
import Googleplus from "../../../assets/images/social/Googleplus.png";
import Linkedln from "../../../assets/images/social/Linkedln.png";
import Tweet from "../../../assets/images/social/Tweet.png";
import whatsapp from "../../../assets/images/social/whatsapp.png";
import pp1 from "../../../assets/images/pp (1).jpg";
import write_art from "../../../assets/images/write_art.png";
const DocReview = () => {
  return (
    <div>
        <div class="main_page">
{/* <-------------- This is Header Sections ---------------> */}
<Header/>
<div class="middle_sections">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="left_sections">
          <div class="profile_part">
            <div class="profile_bg">
              <div class="pro_img">
                <div class="user_profile_ico"> <span>
                    <img src={profile_img} alt=""/></span> </div>
              </div>
            </div>
            <div class="name-account-holder">
              <p>Welcome , Gavin Simoen!</p>
              <a href="#">Update your profile</a> </div>
            <div class="connetct_newworkd"> <span>790</span> <a href="#">Connections</a>
              <p>Grow your network</p>
            </div>
            <div class="connetct_newworkd" style={{border:"none"}}> <span>120</span>
              <p><a href="#" class="who-provisit">Who's viewed your profile</a></p>
            </div>
          </div>
          <div class="bottme_uploads">
            <div class="company_ro_links">
              <div class="add_feed_bg">
                <div class="links_right_fol_trak">
                  <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Help Center </a></li>
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
          <div class="add_space"> <a href="javascript:void(0)"><span><img src={add_img} 
          alt=""/></span></a> </div>
        </div>
        <div class="uploads_folders">
          <div class="add_articlas">
            <div class="dow_view_user_name">
              
              <p>CLICK HERE TO VIEW <a href="#">CHRISTA WATT'S</a> PROFILE</p>
              
            </div>
            <div class="docview_profile_post">
              <div class="first_views">
                <p>Views <span>24104</span></p>
              </div>
              <div class="first_views">
                <p>Downloads <span>330</span></p>
              </div>
              <div class="first_views">
                <p>Score <span>24104</span></p>
              </div>
            </div>
          </div>
          <div class="all_uploads">
         <div class="file_dow_ttry">
         <div class="docview_downlo">
         <a href="#">Download</a>
         </div>
         <div class="docview_name">
         <span>DAILY CLIENTS LIST.PPT </span>
         </div>
         <div class="docview_like_dislike">
         <ul>
         <li><a href="#"><img src={noraml} alt=""/></a></li>
         <li><a href="#"><img src={dis_likenoral} alt=""/></a></li>
         </ul>
         </div>
         <div class="thub_doview">
         <img img src={docview} alt="" class="img-responsive"/>
         </div>
         <div class="social_icon_docview">
         <ul>
         <li><a href="#"><img src={Facebook} alt=""/></a></li>
         <li><a href="#"><img src={Gmail} alt=""/></a></li>
            <li><a href="#"><img src={Googleplus} alt=""/></a></li>
             <li><a href="#"><img src={Linkedln} alt=""/></a></li>
                <li><a href="#"><img src={Tweet} alt=""/></a></li>
                 <li><a href="#"><img src={whatsapp} alt=""/></a></li>

         </ul>
         
         
         
         </div>
         <div class="clearfix"></div>
         <div class="docview_comments">
         
         <div class="panel panel-default">
                            <div class="panel-heading comment_show-pends">
                                <h2 class="panel-title docview">
                                    <span id="ContentPlaceHolder1_lblComments">Comments (0)</span>
                                </h2>
                            </div>
                            <div class="panel-body"
                            style={{textAlign:"center",border:"solid"
                            ,borderColor:"#047e07",borderWidth:"2px"}} 
                           >
                                <div class="form-horizontal">
                                    <div id="ContentPlaceHolder1_pnlAddComment" onkeypress="javascript:return WebForm_FireDefaultButton(event, 'ContentPlaceHolder1_btnAddComment')">
	
                                        <div class="form-group form-group-sm">
                                            <div class="col-sm-12">
                                                <span id="ContentPlaceHolder1_lblError"></span>
                                            </div>
                                            <div class="col-sm-10 text-box-doview">
                                                <input class="form-control input-sm" 
                                                placeholder="Add comment here..."/>
                                            </div>
                                            <div class="col-sm-2 add_btn-cood">
                                                <input type="submit" class="doc_view_soub" 
                                                style={{width:"100px"}}
                                               />
                                            </div>
                                        </div>
                                
</div>
                                </div>
                                <div>
</div>
                            </div>
                        </div>
         </div>
         <div class="comment_list_view">
        <div class="commenter_user_img">
        <span><img src={pp1} alt=""/></span>
        </div>
        <div class="commder_name_and_msg">
        <span>Dinesh Machiwal</span>
        <p>Aug 11, 2017 - While there is no in-app formal feature to download a specific screen or screens,</p>
        </div>
         </div>
         <div class="comment_list_view">
        <div class="commenter_user_img">
        <span><img src={pp1} alt=""/></span>
        </div>
        <div class="commder_name_and_msg">
        <span>Dinesh Machiwal</span>
        <p>Aug 11, 2017 - While there is no in-app formal feature to download a specific screen or screens,</p>
        </div>
         </div>
         <div class="comment_list_view">
        <div class="commenter_user_img">
        <span><img src={pp1} alt=""/></span>
        </div>
        <div class="commder_name_and_msg">
        <span>Dinesh Machiwal</span>
        <p>Aug 11, 2017 - While there is no in-app formal feature to download a specific screen or screens,</p>
        </div>
         </div>
         <div class="comment_list_view">
        <div class="commenter_user_img">
        <span><img src={pp1} alt=""/></span>
        </div>
        <div class="commder_name_and_msg">
        <span>Dinesh Machiwal</span>
        <p>Aug 11, 2017 - While there is no in-app formal feature to download a specific screen or screens,</p>
        </div>
         </div>
         </div>
          </div>
          <div class="clearfix"></div>
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
                  <label for="message-text artic" class="form-control-label"
                  >Write  article Here...<span class="art-writ_penc">
                    <img src={write_art} alt=""/></span> </label>
                  <textarea class="post_msg" placeholder="Write..."></textarea>
                </div>
                <div class="modal-footer bottome">
                  <button type="button" class="post_article_submit">Post</button>
                  <button type="button" class="bnt-cancel_defult" data-dismiss="modal">cancel</button>
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

export default DocReview