import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Banner = (props) => {
    return (
        <>
            <section className="about-bg-img">

                <Navbar textColor={props.detail.textColor} logo={props.detail.logo} btnText={props.detail.btnText} />

                <motion.div className="container mt-5"

                    initial={{
                        x: '-100%', opacity: 0
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="row justify-content-center text-center">
                        <div className="col-6 align-items-center banner-text-clr">
                            <h1>{props.detail.title}</h1>
                            <p>{props.detail.desc}</p>
                            <h2><Link to={`${props.detail.nav}`} style={{ color: "#F4263E" }}><span className="box">{props.detail.subtitle}</span></Link></h2>
                        </div>
                    </div>
                </motion.div>

            </section>
        </>
    )
}

export default Banner;