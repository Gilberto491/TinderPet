import React from "react";
import PetBanner from "../../img/banner.png";
import "./banner.scss";
import Button from "../button";

function Banner() {
    return (
        <aside>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <Button/>  
                        <img src={PetBanner} className="d-block w-100 image" alt="banner dog"/>
                         
                        <div className="carousel-caption d-none d-md-block">
                        
                            <h5 className="titleBanner">Seu pet também pode ter um romance</h5>   
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Banner;