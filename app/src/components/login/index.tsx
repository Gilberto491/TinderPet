import "./login.scss";
import IconLogin from "img/login.png";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <aside className="login-aside">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src={IconLogin} id="icon" className="iconLogin" alt="User Icon" />
                    </div>

                    <form>
                        <input type="text" id="login" className="fadeIn second input-login" placeholder="login" />
                        <input type="password" id="password" className="fadeIn third input-login"  placeholder="password" />
                        <Link to='/home'>
                            <input type="submit" className="fadeIn fourth input login-input" value="Log In" />
                        </Link>
                    </form>

                </div>
            </div>
        </aside>
    );
}