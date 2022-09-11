import "./login.scss";
import IconLogin from "../../img/login.png";

export default function Login() {
    return (
        <aside className="login-aside">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src={IconLogin} id="icon" className="iconLogin" alt="User Icon" />
                    </div>

                    <form>
                        <input type="text" id="login" className="fadeIn second input-login" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third input-login" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth input" value="Log In" />
                    </form>

                </div>
            </div>
        </aside>
    )
}