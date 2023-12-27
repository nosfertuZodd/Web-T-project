import '../basic.css';
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Components
import Navbar from '../global/Navbar'
import Services from '../global/Services'
import CompanyDetail from '../global/Detail';
import Expert from '../global/Expert'
import Footer from '../global/Footer'

// Data file
import CounterData from '../data-json/CounterData'

// Icons
import arrow from '../../../img/process-icon/arrow.png'
import save from '../../../img/process-icon/save.png'
import check from '../../../img/process-icon/check.png'
import publish from '../../../img/process-icon/publish.png'
import social from '../../../img/social.png'

const Home = () => {

    return (
        <>
            <Navbar textColor={"#333"} logo={"#F4263E"} btnText={"#fff"}/>
            <Header />
            <Services total={3} />
            <Expert />
            <CountSection />
            <RegisteryDemo />
            <Footer />

        </>
    )
}

const RegisteryDemo = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="container " >
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="process_text mt-4">
                                <h5>A simple, yet powerful and efficient process</h5>
                                <h2>Our bulletproof process to win on Social Media</h2>
                                <p>
                                    Just connect us through following the below instruction and have the world biggest community behind you. Go and connect with HostAd.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between p-1 pb-5 text-center">

                        <div className="col-lg-3 col-sm-8 col-sm-12 m-1">
                            <div className="efficient_process_card">
                                <div className="card_imgr">
                                    <img src={save} alt="img" />
                                    <img src={arrow} alt="img" className="before_after" />
                                </div>
                                <h4>Register and find service</h4>
                                <p>
                                    Go to the register page for registeration to avail the services and then select checklist.
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-sm-8 col-sm-12 m-1">
                            <div className="efficient_process_card">
                                <div className="card_img" >
                                    <img src={check} alt="img" />
                                    <img src={arrow} alt="arrow" className="before_after" />
                                </div>
                                <h4>Publishing &amp; Execution</h4>
                                <p>
                                    Select the desired industry for products and business promotion and click on publish.
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-sm-8 col-sm-12 m-1">

                            <div className="efficient_process_card">
                                <div className="card_img">
                                    <img src={publish} alt="img" />
                                </div>
                                <h4>Growth &amp; Scale, Enjoy super Results</h4>
                                <p>
                                    Select the desired package and place your offer and connect to the best promoton company.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

const CountSection = () => {

    const counterCard = CounterData.map((ele, index) => {
        return <CompanyDetail key={index} number={ele.number} desc={ele.desc} />
    })

    return (
        <div className="container-fluid counter text-center pb-5">

            <center>
                <h3 className="pt-4">Company History</h3>
                <h1 className="pb-2">We Are Expert
                    & Professional Agency</h1>
            </center>

            <div className="row g-4 center">
                {counterCard}
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <>
            <div className="home-area mb-4">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <motion.div className="main-banner-content"
                                        initial={{
                                            x: '-100%', opacity: 0
                                        }}

                                        animate={{ x: 0, opacity: 1 }}

                                        transition={{ delay: 0.1 }}

                                    >
                                        <h1>
                                            We help you to grow your startup to the
                                            <span className="color-text"> next level</span>
                                        </h1>
                                        <p>
                                            If you need to promote your business and have an impact on the world of your presence then connect to ADHost to grow business through best of the youTubers of the world.
                                        </p>
                                        <div className="banner-btn">
                                            <Link to="/about" className="header-btn default-btn-one">
                                                Learn More

                                            </Link>
                                            <Link className="header-btn default-btn" to="/contact">
                                                Contact Us

                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <motion.div className="banner-image"
                                        initial={{
                                            x: '-100%', opacity: 0
                                        }}

                                        animate={{ x: 0, opacity: 1 }}

                                        transition={{ delay: 0.2 }}
                                    >

                                        <img src={social} alt="social banner" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grey-cr" />
            </div>

        </>
    )
}

export default Home