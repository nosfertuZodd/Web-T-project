import {React, useState, useEffect, useContext} from 'react'
import TopBar from '../../components/ClientTopBar';
import Footer from '../basic/global/Footer';
import CientHeader from '../../components/ClientHeader'
import DashboardCatalog from '../../components/DashboardCatalog'

const ClientDashboard = (props) => {

  const profile = JSON.parse(window.localStorage.getItem('user'));
  // console.log(items)

  return (
    <div>
        <TopBar />
        <CientHeader title="DashBoard" subtitle={profile.name} btn1="Browse Project Catalog" btn2="Post a Job" />
        <DashboardCatalog user={profile} dash={false}/>
        <Footer />
    </div>
  )
}

export default ClientDashboard
