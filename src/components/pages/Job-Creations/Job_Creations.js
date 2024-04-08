import React from 'react'
import Header from '../../header/Header';
import job from "../../../assets/images/job.png"

const Job_Creations = () => {
  return (
    <div>
        <div className="main_page">

{/* <------------ This is Header Sections ---------------> */}
<Header/>
<div className="middle_sections">
<div className="container">
<div className="row">
<div className="col-md-12">
<div className="user_profile_edit">
<span className="user_profi_icons"><img src={job} alt=""/></span><span className="name_user_profiles">Job Creations</span>
</div>
<div className="row">
<div className="user_details_profile">
<div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Job No.</label>
                                        <input name="name" type="text" placeholder="Job No."
                                         className="select_filds"/>
                                    </div>
                                </div>

<div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name">  - Job Category</label>
                                        <select className="select_filds">
		<option value="Afghanistan">--Select Category--</option>
		<option value="Albania">01</option>
		<option value="Algeria">02</option>
	</select>
                                    </div>
                                </div> 
<div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Job Title</label>
                                        <input name="name" type="text" placeholder="Job Title" 
                                        className="select_filds"/>
                                    </div>
                                </div>   
                                <div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Job Details</label>
                                        <input name="name" type="text" placeholder="Job Details" 
                                        className="select_filds"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Customer Name </label>
                                        <input name="name" type="text" placeholder="Customer Name" 
                                        className="select_filds"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Customer Address</label>
                                        <input name="name" type="text" placeholder="Customer Address"
                                         className="select_filds"/>
                                    </div>
                                </div>
                                
                                
                                <div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Customer Phone</label>
                                        <input name="name" type="text" placeholder="Job Details" 
                                        className="select_filds"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Select Sales Person</label>
                                        <select className="select_filds">
		<option value="Afghanistan">--Select Sales Person--</option>
		<option value="Albania">01</option>
		<option value="Algeria">02</option>
	</select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Job Date</label>
                                        <input name="name" type="text" placeholder="Job Date"
                                         className="select_filds"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Job Time</label>
                                        <input name="name" type="text" placeholder="Job Time" 
                                        className="select_filds"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Customer Email</label>
                                        <input name="name" type="text" placeholder="Customer Email"
                                         className="select_filds"/>
                                    </div>
                                </div>                     
<div className="update_profile">
<a to="#" className="update_frofile">Submit</a>
</div>
</div>
</div>
</div>
<div className="col-md-12">
<div className="user_profile_edit">
<span className="user_profi_icons"><img src="images/job-compilations.png" alt=""/></span>
<span className="name_user_profiles"> Job Compilations</span>
</div>
<div className="row">
<div className="user_details_profile">
<div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Job Compilations Time</label>
                                        <input name="name" type="text" placeholder="Job Compilations Time" 
                                        className="select_filds"/>
                                    </div>
                                </div>
<div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Clock in time</label>
                                        <input name="name" type="text" placeholder="Clock in time" 
                                        className="select_filds"/>
                                    </div>
                                </div>
<div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Clock Out time</label>
                                        <input name="name" type="text" placeholder="Clock Out time" 
                                        className="select_filds"/>
                                    </div>
                                </div>              
<div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Clock in Images</label>
                                        <input name="name" type="text" placeholder="Clock in Images" 
                                        className="select_filds"/>
                                    </div>
                                </div>
<div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Clock Out Images</label>
                                        <input name="name" type="text" placeholder="Clock Out Images" 
                                        className="select_filds"/>
                                    </div>
                                </div>
<div className="col-md-4">
                                    <div className="form-group edit_filds">
                                        <label className="control-label filds" for="name"> - Job Compilations Multiple Images</label>
                                        <input name="name" type="text" 
                                        placeholder="Job Compilations Multiple Images" className="select_filds"/>
                                    </div>
                                </div>
<div className="update_profile">
<a to="#" className="update_frofile">Submit</a>
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

export default Job_Creations