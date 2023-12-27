import React from 'react'
import Banner from '../global/Banner'
import Footer from '../global/Footer'
import { Link } from 'react-router-dom'
import article from '../../../img/contact-icon/article.png'
import service from '../../../img/contact-icon/service.png'
import basic from '../../../img/contact-icon/basics.png'

const Contact = () => {

  const text = {
    subtitle: "Contact Us",
    title: "Your Connection to HostAd Team",
    desc: "What is your Problem ? Please get in touch and our expert support team will anwser all your question.",
    textColor: "#fff",
    logo: "#fff",
    btnText: "#F4263E",
    nav: "/contact"
  }

  return (
    <>
      <Banner detail={text} />

      <div className="container text-center pd-5 mt-5 mb-5">


        <h3 className="heading accent-2 mb-5" style={{ color: "#2D325A", fontSize: "2.5rem" }}>
          <span style={{ padding: "0px 1% 5px 1%", backgroundSize: "100% 21px" }}>
            Customer Success
          </span>
        </h3>

        <div className="row justify-content-evenly gap-5">

          <div className="card text-center p-4 address-card " style={{ width: "19rem" }}>
            <img src={article} className="center" alt="article and guidelines" width="80rem" height="80rem" />
            <div className="card-body">
              <h5 className="card-title">Articles and Guides</h5>
              <p className="card-text">100+ articles to get the information you need when you need it.</p>
              <Link to="#" className="btn btn-danger">Visit knowledge Base</Link>
            </div>
          </div>

          <div className="card text-center p-4 address-card " style={{ width: "19rem" }}>
            <img src={service} className="center" alt="article and guidelines" width="80rem" height="80rem" />
            <div className="card-body">
              <h5 className="card-title">Contact Support</h5>
              <p className="card-text">Get in touch with our customers support team.</p>
              <Link to="#" className="btn btn-danger">Open a ticket.</Link>
            </div>
          </div>

          <div className="card text-center p-4 address-card " style={{ width: "19rem" }}>
            <img src={basic} className="center" alt="article and guidelines" width="80rem" height="80rem" />
            <div className="card-body">
              <h5 className="card-title">WorkShops</h5>
              <p className="card-text">You can learn alot in an hour with our live workshops.</p>
              <Link to="#" className="btn btn-danger">Learn the Basics.</Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact