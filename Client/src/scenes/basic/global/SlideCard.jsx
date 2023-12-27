import React from 'react'

const CardSlider = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card border-2 m-1" style={{ width: "18rem" }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.prof}</h6>
                </div>
            </div>
        </div>
    )
}

export default CardSlider