import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className="footer-area section-padding">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <h3 className="mt-4">About Us</h3>
                                </div>
                                <p>
                                    AdHost is the trusted company to promote products and services and grow your business accordingly to your needs. AdHost allow you to connect best content creator to promotion of your product, sefvices or work.
                                </p>
                                <ul className="footer-social">
                                    <li>
                                        <Link to="#" >
                                            {" "}
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" >
                                            {" "}
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            {" "}
                                            <i className="fab fa-pinterest" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            {" "}
                                            <i className="fab fa-linkedin" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <h3 className="mt-4">Our Services</h3>
                                </div>
                                <ul className="footer-quick-links">
                                    <li>
                                        {" "}
                                        <Link to="#">Product Promotion</Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="#">Grow Business</Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="#">Networking Services</Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="#">Digital Marketing</Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to="#">Build Network</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <h3  className="mt-4">Quick Links</h3>
                                </div>
                                <ul className="footer-quick-links">
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="footer-heading">
                                    <h3  className="mt-4">Contact Information</h3>
                                </div>
                                <div className="footer-info-contact">
                                    <span>
                                        <strong>Phone:</strong>{" "}
                                        <Link to="tel:03320601671">+092 3332 060 1671</Link>
                                    </span>
                                </div>
                                <div className="footer-info-contact">
                                    <span>
                                        <strong>Email:</strong>{" "}
                                        <Link to="shaheryar.rafique100@gmail.com">shaheryar.rafique100@gmail.com</Link>
                                    </span>
                                </div>
                                <div className="footer-info-contact">
                                    <span>
                                        <strong>Address:</strong> 365 Street, Johar Town, Lahore
                                    </span>
                                </div>

                                <form className="newsletter-form">
                                    <input
                                        type="email"
                                        className="input-newsletter"
                                        placeholder="Enter your email"
                                        name="EMAIL"
                                        required=""
                                        autoComplete="off"
                                    />
                                    <button className="default-btn" type="submit">
                                        Subscribe <span />
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p> <i className="far fa-copyright"></i> 2022 AdHost - All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <ul>
                                <li> <a href="terms-condition.html">Terms &amp; Conditions</a>
                                </li>
                                <li> <a href="privacy-policy.html"> Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer