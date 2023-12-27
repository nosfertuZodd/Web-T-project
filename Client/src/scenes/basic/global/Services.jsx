import Card from './ServiceCard';
//import CardData from '../data/CardData';
import axios from 'axios';
import React, { useState, useEffect } from 'react'


const CardSection = (props) => {

    const [CardData, setCardData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/services')
        .then(res => {
            setCardData(res.data.data.doc);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const cards = CardData.map((ele, index) => {
        if (index < props.total)
            return <Card key={ele._id + index} desc={ele.description} title={ele.title} icon={ele.icon} />
        else return <></>;
    })
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#fff" }}>
                <div className="container p-3 pt-4">

                    <div className="content row">
                        <div className="col-lg-12 col-md-12 col-sm-12 align-items-center">

                            <h3 className="heading accent-2 mb-4" style={{ color: "#2D325A", fontSize: "2.5rem" }}>
                                <span style={{ padding: "0px 1% 5px 1%", backgroundSize: "100% 21px" }}>
                                Our SMM Services
                                </span>
                            </h3>

                            <h1 style={{color: "#F4263E"}} >High-impact services to take your business to the next level</h1>
                            <p>We provide services for different platform. We have total of 9 servoces that we offer to our customers. Top services include youtube subscriber, twitter followers, and many more.</p>
                        </div>
                    </div>

                    <div className="container mt-2">
                        <div className="row justify-content-center g-5">
                            {cards}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CardSection