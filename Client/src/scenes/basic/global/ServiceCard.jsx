import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="service_card">
                <div className="service_card_img">
                    <img src={props.icon} alt="icon" />
                </div>
                <div className="service_card_text">
                    <h5>{props.title}</h5>
                    <p>{props.desc}</p>
                    <div className="service_card__btn">
                        <Link href="/contact">Get Started  <i className="fa-solid fa-arrow-right"></i> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card