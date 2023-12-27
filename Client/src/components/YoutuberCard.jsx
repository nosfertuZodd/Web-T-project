import React from 'react'

const YoutuberCard = (props) => {
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.description}</p>
                            <p className="card-text"><small className="text-muted"> Channel Name: {props.Channel_name}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YoutuberCard
