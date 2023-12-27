import React from 'react'
import TopBar from '../../components/ClientTopBar';
import Footer from '../basic/global/Footer';
import CientHeader from '../../components/ClientHeader'
import JobsScreen  from '../YoutuberCatelog'

const YouTuberDashboard = () => {
    const profile = JSON.parse(window.localStorage.getItem('user'));
    return (
        <div>
            <TopBar />
             <CientHeader title="DashBoard" subtitle={profile.name} btn1="Browse Project Catalog" btn2="Find a Job" />
             <JobsScreen user={profile} dash={false} />
            <Footer />
        </div>
    )
}

export default YouTuberDashboard
