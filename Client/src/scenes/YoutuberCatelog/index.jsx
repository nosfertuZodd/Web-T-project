import {React, useState, useEffect, useContext} from 'react'
import axios from 'axios';
import {Button} from "@mui/material"
import {Link, useNavigate} from 'react-router-dom'
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';


const YoutuberJobsScreen = () => {
   
    const [job, setJob] = useState([{}]);

    useEffect(()=> {
        axios.get(`http://127.0.01:8000/api/v1/jobs`)
        .then(res => {
            setJob(res.data.data.myJobs)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    let JobItem  = job.map((ele, index) => {
        return <Card key={index} id={ele._id} title={ele.title} desc={ele.description} budget={ele.budget} audiancePool={ele.audiancePool} preferAudience={ele.preferAudience} status={ele.status} createdAt={ele.createdAt} />
    })

    return (
        <div className="container pe-5 px-5 pb-3 pt-3 ">
            <div className="row justify-content-between g-5">
                {JobItem}
            </div>
        </div>
    )
}

const Card = (props) => {
    
    const navigate = useNavigate();
    return (
        <div className="col-sm-12 col-md-6 col-lg-4" onClick={()=> navigate(`/client/${props.id}`)} >
            <div className="service_card" style={{ borderRadius: "20px", border: "1.5px solid #F4263E" }}>
                <div className="service_card_text">
                    <h5 className="mx-2" style={{ marginBottom: "5px", color: "#F4263E", fontSize: "22px"}}>{props.title}  </h5>
                    <hr></hr>
                    <p style={{ margin: "10px" }}>{props.desc}</p>
                    <hr style={{ margin: "0px" }}></hr>
                    <p style={{ margin: "8px 7px" }}> <span style={{ fontWeight: "bold" }}> Budget:</span> {props.budget}$</p>
                    <p style={{ margin: "5px 7px" }}> <span style={{ fontWeight: "bold" }}> Audience Pool:</span> {props.audiancePool}</p>
                    <p style={{ margin: "5px 7px" }}> <span style={{ fontWeight: "bold" }}> Prefer Audience:</span> {props.preferAudience}</p>
                    <p style={{ margin: "5px 7px" }}> <span style={{ fontWeight: "bold" }}> Status:</span> {props.status}</p>
                    <p style={{ margin: "5px 7px" }}> <span style={{ fontWeight: "bold" }}> Posted:</span> {new Date(props.createdAt).getMinutes()} minutes ago</p>
                    {props.dash ? <div className="service_card__btn mt-5">
                        <Link href="/contact">Action </Link>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}


export default YoutuberJobsScreen
