import React from 'react'
import "../../../assets/css/main.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/responsive_media.css";
import { Link } from 'react-router-dom';

const Page_404 = () => {
  return (
    <div>
        <div class="main_page">
<div class="middle_sections">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="page_not_found">
<div class="not_found_swopinfo_logo">
<div class="not_404">
<h2>404</h2>
<p>
<strong>OPPS,</strong> Sorry we can't find that page!</p>
</div>
</div>
<div class="back_home">
<Link to="/" class="back-to_home">
    <img src="images/left-arrow.png" alt=""/> back to home</Link>
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

export default Page_404