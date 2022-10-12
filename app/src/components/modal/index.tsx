import Button from "./button";
import Pet from "img/login.png";
import "./modal.scss";
import Matchs from "./matchs";
import Carousel from "./carousel";

export default function Modal({position}: {position: string}) {
    return (
        <> 
            <Button
                position={position}
            />
            <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">TinderPet<img className="logo-modal" src={Pet}/></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Carousel/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}