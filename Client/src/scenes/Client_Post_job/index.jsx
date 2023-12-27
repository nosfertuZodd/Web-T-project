import React from 'react'
import TopBar from '../../components/ClientTopBar';
import CreateJob from '../../components/CreateJob';
import Footer from '../basic/global/Footer';
import '../../components/Client.css'


const PostJob = () => {
 
  
  return (
    <div>
        <TopBar />
        <CreateJob  />
        <Footer />
    </div>
  )
}

export default PostJob
