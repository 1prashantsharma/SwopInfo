import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import Uploads from '../components/pages/uploads/Uploads'
import Following from '../components/pages/following/Following'
import Followers from '../components/pages/followers/Followers'
import Groups from '../components/pages/groups/Groups'
import BookMarks from '../components/pages/bookmarks/BookMarks'
import InviteFriends from '../components/pages/invite_friends/Invite_Friends'
import SwopInfoTrends from '../components/pages/SwopInfo_Trends/SwopInfo_Trends'
import BusinessCard from '../components/pages/business-card/Business_Card'
import BusinessProfile from '../components/pages/business_profile/Business_Profile'
import JobCreations from '../components/pages/Job-Creations/Job_Creations'
import DocReview from '../components/pages/docReview/DocReview'
import Editprofile from '../components/pages/editprofile/Editprofile'
import Page404 from '../components/pages/404/Page_404'
import BusinessCard2 from '../components/pages/business_card_2/Business_Card_2'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Uploads' element={<Uploads/>}/>
            <Route path='/Following' element={<Following/>}/>
            <Route path='/Followers' element={<Followers/>}/>
            <Route path='/Groups' element={<Groups/>}/>
            <Route path='/BookMarks' element={<BookMarks/>}/>
            <Route path='/Invite-Friends' element={<InviteFriends/>}/>
            <Route path='/SwopInfo-Trends' element={<SwopInfoTrends/>}/>
            <Route path='/Business-Card' element={<BusinessCard/>}/>
            <Route path='/Business_Card_2' element={<BusinessCard2/>}/>
            <Route path='/Business_Profile' element={<BusinessProfile/>}/>
            <Route path='/Job-Creations' element={<JobCreations/>}/>
            <Route path='/DocReview' element={<DocReview/>}/>
            <Route path='/Editprofile' element={<Editprofile/>}/>
            <Route path='/Page_404' element={<Page404/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes