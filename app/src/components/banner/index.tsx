import PetBanner from "../../img/banner.png";
import "./banner.scss";
import Modal from "../modal";

export default function Banner() {
    return (
        <aside>
            <div id="carouselExampleCaptions" className="carousel slide" >
                <div className="carousel-inner">
                    <div className="carousel-item active image-banner">
                        <img src={PetBanner} className="d-block image" alt="banner dog"/>
                        <Modal
                        position="relative"    
                    />  
                    </div>
                </div>
                 
            </div>
        </aside>
    );
}