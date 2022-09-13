import "./button.scss";

export default function Button({position}: {position: string}) {
    return (
        <div className="text-center">
            <button id={position} type="button" className="btn-custom " data-bs-toggle="modal" data-bs-target="#exampleModal">
                Encontrar Pretendentes Agora!
            </button>
        </div>
    );
}