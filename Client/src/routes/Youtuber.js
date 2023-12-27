import React from 'react';
import { Routes, Route} from 'react-router-dom'
import AdminDashboard from '../scenes/YoutuberDashboard'
// import UserContext from '../Context/UserContext'

const AdminRoutes = () => {
    
    return (
        <div>
            <Routes>
                {/* <Route exact path="/" element={<Dashboard />} />

                <Route path="hire-youtuber" element={<Youtuber />} />

                <Route path="my-job" element={<MyJobs />} />
                <Route path="post-job" element={<PostJob />} />
                <Route path="/:id" element={<EditJob />} />

                <Route path="our-services" element={<OurServices />} /> */}

                <Route path="" element={<AdminDashboard />} />
                <Route path="find-job" element={<AdminDashboard />} />


            </Routes>
        </div>
    )
}

export default AdminRoutes
