import CardSlider from './SlideCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ExpertData from '../data-json/ExpertData'

const CardShow = () => {

    const expert = ExpertData.map((ele, index) => {
        return <CardSlider key={index} img={ele.img} name={ele.name} prof={ele.prof} />
    })

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container expert-card">
            <div className="row">
                <center className="mt-4 p-0">
                    <h1 className="heading accent-2 mb-5 styles">
                        <span style={{ padding: "0px 1% 5px 1%", backgroundSize: "100% 21px" }}>
                            Expert Team Members
                        </span>
                    </h1>

                </center>
                <Slider className="slider" {...settings}>
                    {expert}
                </Slider>
            </div>
        </div>
    )
}

export default CardShow