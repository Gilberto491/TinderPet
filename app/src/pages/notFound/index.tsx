import NotFound from "../../img/notFoundv2.jpg";
import Button from "../../components/button";
import "./notFound.scss";
import { AssertionError } from "assert";

export default function login() {
    return (
        <div>
            <div className="container text-center">
            <div className="row">
                <div className="col">
                    <img className="image-page" src={NotFound}></img>
                </div>
                <div className="col">
                <h2 className="margin-page">Página não encontrada <Button/></h2>  
                </div>
                <div className="col">
                </div>
                <div className="col">
                </div>
            </div>
            </div>
        </div>
    );
}