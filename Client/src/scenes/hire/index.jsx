import React from 'react'
import TopBar from '../../components/ClientTopBar';
import Footer from '../basic/global/Footer';
import ExpertData from '../basic/data-json/ExpertData'


const index = () => {
  return (
    <div>
      <TopBar />
        <YoutuberCard />
      <Footer />
    </div>
  )
}

const YoutuberCard = () => {

  return (
    <>
      <div className="container expert-card">
        <div className="row">
          <center className="mt-4 p-0">
            <h1 className="heading accent-2 mb-5 styles">
              <span style={{ padding: "0px 1% 5px 1%", backgroundSize: "100% 21px" }}>
                Expert Youtuber
              </span>
            </h1>
           <div className="container justify-center alignItem-center mt-5 mb-5">
              <div className="row">
                {expert}
              </div>
           </div>

          </center>
        </div>
      </div>
    </>
  )
}

const ExpertCards = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
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

const expert = ExpertData.map((ele, index) => {
  return <ExpertCards key={index} img={ele.img} name={ele.name} prof={ele.prof} />
})

export default index
