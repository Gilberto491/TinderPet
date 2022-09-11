import React from "react";
import BannerDog from '../../img/banner.png';
import './banner.css'

class Banner extends React.Component {
    render() {
        return (
            <body>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={BannerDog} className="d-block w-100 image" alt="banner dog"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="titleBanner">Seu pet também pode ter um romance</h5>   
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default Banner;