import React from 'react'
import TopBar from '../../components/ClientTopBar';
import Footer from '../basic/global/Footer';
import CientHeader from '../../components/ClientHeader'
import DashboardCatalog from '../../components/DashboardCatalog'

const MyJobs = () => {
  const profile = JSON.parse(window.localStorage.getItem('user'));
  
  return (
    <div>
        <TopBar />
        <CientHeader title="My Jobs" subtitle="Basit Fayyaz" btn1="Browse Project Catalog" btn2="Post a Job" />
        <DashboardCatalog user={profile} dash={true}/>
        <Footer />
    </div>
  )
}

export default MyJobs
