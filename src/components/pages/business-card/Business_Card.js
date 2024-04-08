import React from 'react'
import Header from '../../header/Header'
import profile_img from "../../../assets/images/profile-img.jpg";
import add_img from "../../../assets/images/add_img.jpg";
import card1 from "../../../assets/images/card/1.png";
import border from "../../../assets/images/card/border.png";
import card2 from "../../../assets/images/card/2.png";
import card3 from "../../../assets/images/card/3.png";
import card4 from "../../../assets/images/card/4.png";
import card5 from "../../../assets/images/card/5.png";
import social from "../../../assets/images/social.png";
import f1 from "../../../assets/images/f1.jpg";
import f2 from "../../../assets/images/f2.jpg";
import f3 from "../../../assets/images/f3.jpg";
const Business_Card = () => {
  return (
    <div>
        <div class="main_page">
{/* <------------- This is Header Sections --------------------> */}
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
<span><img src={profile_img} alt=""/></span>
</div>
</div>
</div>
<div class="name-account-holder">
<p>Welcome , Gavin Simoen!</p>
<a href="#">Update your profile</a>
</div>
<div class="connetct_newworkd">
<span>790</span>
<a href="#">Connections</a>
<p>Grow your network</p>
</div>
<div class="connetct_newworkd" style={{border:"none"}} >
<span>120</span>
<p><a href="#" class="who-provisit">Who's viewed your profile</a></p>
</div>
</div>
<div class="add_space">
<a href="#"><span><img src={add_img} alt=""/></span></a>
</div>
</div>
<div class="feed_center">
<div class="add_articlas">
<div class="business_card">
<div class="left_name_select">
<p>Select card to display:</p>
</div>
<div class="right_select_cardtype">
<select class="select-carttyp form-control">  
 <option selected="Default Card">Default Card</option>
                    <option value="Uploaded Card">Uploaded Card</option>
                </select>
</div>
<br/>
<br/>
</div>
</div>
<div class="main_business_cart">
<div class="shape_business_cart">
<div class="card_bg_track">
<div class="detial_tds">
<h1 class="swopin_main_titile">Swopinfo<br/></h1>
<p class="vavin_tra_name">Gavin Simoen</p>
<p class="title_neew">Co-Founder And CEO</p>
</div>
</div>
<div class="profile_img_card">
<span class="business_card_profile"><img src={profile_img} alt=""/></span>
</div>
<div class="all_detial_buso">
<div class="border-set">
<img src={border} alt=""/>
</div>
<div class="full_part_track">
<div class="first_cell">
<img src={card1} alt=""/>
</div>
<div class="card_detsi">
<p>0437484230</p>
</div>
</div>
<div class="full_part_track">
<div class="first_cell">
<img src={card2} alt=""/>
</div>
<div class="card_detsi">
<p>0824706017</p>
</div>
</div>
<div class="full_part_track">
<div class="first_cell">
<img src={card3} alt=""/>
</div>
<div class="card_detsi">
<p>gaving@swopinfo.com	</p>
</div>
</div>
<div class="full_part_track">
<div class="first_cell">
<img src={card4} alt=""/>
</div>
<div class="card_detsi">
<p>0865804170</p>
</div>
</div>
<div class="full_part_track">
<div class="first_cell">
<img src={card5} alt=""/>
</div>
<div class="card_detsi">
<p>Suite 5, 5201,East Londo, (South Africa)</p>
</div>
</div>
</div>
<div class="footer_card">
<p>Powered by Swopinfo</p>
</div>
</div>
</div>
<div class="add_and_removecard">
<div class="btn_card">
<input type="button" value="Upload your Won" class="won_card_uplads"/>
<input type="button" value="Remove Card" class="remove_card"/>
<div class="socia_icons_card">
<img src={social} alt=""/>
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
</div>
</div>
</div>
</div>
</div>
</div>
    </div>
  )
}

export default Business_Card