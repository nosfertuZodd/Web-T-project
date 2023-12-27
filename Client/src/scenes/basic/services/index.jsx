import React from 'react'
import Service from '../global/Services'
import Footer from '../global/Footer'
import Banner from '../global/Banner'

const Services = () => {

  const text = {
    subtitle: "Our Service",
    title: "A Great Organzation always provide a great Services to Customer",
    desc: "Connect with the HostAD and grow your business faster than you imagine. Don't miss opportunity to become a brand.",
    textColor: "#fff",
    logo: "#fff",
    btnText: "#F4263E",
    nav: "/contact"
  }


  return (
    <>
      <Banner detail={text}/>
      <Service total={9} />
      <Footer />

    </>
  )
}

export default Services