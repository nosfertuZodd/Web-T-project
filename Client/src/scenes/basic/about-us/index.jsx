import React from 'react'
import Expert from '../global/Expert'
import Footer from '../global/Footer'
import Banner from '../global/Banner'


const About = () => {

  const text = {
    subtitle: "About Us",
    title: "A Great Company Always Has A Great Team Behind",
    desc: "Connect with the HOSTAD and grow your business faster than you imagine. Don't miss opportunity to become a brand.",
    textColor: "#fff",
    logo: "#fff",
    btnText: "#F4263E",
    nav: "/about"
  }

  return (
    <>
      <Banner detail={text} />
      <Expert />
      <Footer />
    </>
  )
}


export default About;