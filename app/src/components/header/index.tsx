import "./header.scss";
import { Link } from "react-router-dom";
import ScrollTop from "./scrollTop";

export default function Header(
    {search, page}: {search: boolean, page:boolean}
    ) {
    return (
        <aside>
            <ScrollTop
                page={page}
            />
            <header id="header" className="p-3 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/home" className="nav-link px-2 link-secondary">Overview</Link></li>
                        </ul>

                        {search ? <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control" placeholder="buscar" aria-label="Search"/>
                        </form>: ""}
                        
                        <div className="dropdown text-end">
                            <Link to="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://avatars.githubusercontent.com/u/56416760?v=4" alt="mdo" width="32" height="32" className="rounded-circle"/>
                            </Link>
                            
                            <ul className="dropdown-menu text-small">
                                <li><Link className="dropdown-item text-decoration-none" to="/perfil">Perfil</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link to="/" className="dropdown-item">Sair</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </aside>
    );
}