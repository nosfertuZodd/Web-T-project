import React from 'react'
import TopBar from '../../components/ClientTopBar';
import EditJobPost from '../../components/EditJob';
import Footer from '../basic/global/Footer';
import '../../components/Client.css'

const EditJob = () => {
    return (
        <div>
            <TopBar />
            <EditJobPost />
            <Footer />
        </div>
    )
}

export default EditJob