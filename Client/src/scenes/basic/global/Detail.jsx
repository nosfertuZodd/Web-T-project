import React, {useState} from 'react'

const CounterSection = (props) => {

    const [count] = useState(props.number);

    return (
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="counter-section">
                <h2>{count}<i className="fa-solid fa-plus"></i></h2>
                <h4>{props.desc}</h4>
            </div>
        </div>
    )
}

export default CounterSection