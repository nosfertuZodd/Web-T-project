import React from 'react'
import TopBar from '../../components/ClientTopBar';
import Footer from '../basic/global/Footer';
import Services from '../basic/global/Services'

const OurServices = () => {
  return (
    <div>
        <TopBar />
            <Services total={6} />
        <Footer />
    </div>
  )
}

export default OurServices