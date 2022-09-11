import "./footer.scss";
import Logo from "../../img/logo.png";

export default function Footer() {
    return (
        <aside>
            <div className="footer container-my">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted"><img className="logo" src={Logo}/></p>
                
                    <a className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Gilberto Fredes</p>
                    </a>
                </footer>
            </div>
        </aside>    
    )
}