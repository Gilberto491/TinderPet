import "./button.scss";

export default function Button({position}: {position: string}) {
    return (
        <aside className="button-banner">
            <input id={position} type="submit" className="button large ef-button round hide-for-small" value="Encontrar Pretendentes Agora!"></input>
        </aside>    
    )
}
