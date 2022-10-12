import NotFound from "img/notFoundv2.jpg";
import Button from "components/button";
import "./notFound.scss";

export default function notFound() {
    return (
        <aside>
            <div className="body-notfound">
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <img className="img-notfound" src={NotFound}/>
                        </div>
                        <h3>404 - Página não encontrada</h3>
                        <p>A página que você está procurando está temporariamente indisponível.</p>
                        <Button/>
                    </div>
                </div>
            </div>
        </aside>
    );
}