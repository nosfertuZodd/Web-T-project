import React from 'react'
import { Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const ClientHeader = (props) => {
    const navigate = useNavigate();

    return (
        <div className="container pb-2 pe-5 pt-5 px-5">
            <div className="row align-items-center">
                <div className="col-3">
                    <Typography variant="h4" style={{ fontWeight: "bold" }} color="#F4263E">{props.title}</Typography>
                    <Typography variant="h6" color="#333">{props.subtitle}</Typography>
                </div>

                <div className="col-4">
                </div>

                <div className="col text-align-right">

                    <div className="row">
                        <div className="col">
                            <div className="col text-align-right">
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    sx={{ mt: 3, mb: 2, mx: 3 }}
                                    style={{ border: "1px solid #F4263E", height: "40px", borderRadius: "30px", fontWeight: "bold", fontFamily: "cabin", color: "#F4263E" }}
                                >
                                    {props.btn1}
                                </Button>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    style={{ backgroundColor: "#F4263E", height: "40px", width: "36%", borderRadius: "30px", fontWeight: "bold", fontFamily: "cabin" }}
                                    onClick={()=> {navigate("/client/post-job")}}
                                >
                                    {props.btn2}
                                </Button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr style={{ color: "#F4263E" }}></hr>
        </div>
    )
}

export default ClientHeader