import React from 'react';
import { Routes, Route} from 'react-router-dom'
import PostJob from '../scenes/Client_Post_job'
import Youtuber from '../scenes/hire'
import Dashboard from '../scenes/Client_Dashboard'
import OurServices from '../scenes/our_services';
import MyJobs from "../scenes/myJobs"
import EditJob from '../scenes/EditJob'
import '../components/Client.css'
// import UserContext from '../Context/UserContext'

const ClientRoutes = () => {

    // const location = useLocation();
    // console.log(location.state);
    // const user = useContext(UserContext)
    // console.log(user)
    
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />

                <Route path="hire-youtuber" element={<Youtuber />} />

                <Route path="my-job" element={<MyJobs />} />
                <Route path="post-job" element={<PostJob />} />
                <Route path="/:id" element={<EditJob />} />

                <Route path="our-services" element={<OurServices />} />

            </Routes>
        </div>
    )
}

export default ClientRoutes
