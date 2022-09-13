import "./button.scss";
import { useNavigate } from "react-router-dom";

export default function Button() {
    const navigate = useNavigate();
    return (
        <button  className="btn-notFound" onClick={() => navigate(-1)}>
            voltar agora mesmo!
        </button>
    );
}