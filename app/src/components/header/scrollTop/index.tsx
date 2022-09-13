import {useEffect, useState} from "react";
import "./scrollTop.scss";

export default function ScrollTop() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <aside>
            {backToTopButton && (
                <button id="toTopBtn" className="page-scroll cd-top  js-cd-top cd-top--is-visible cd-top--fade-out" data-abc="true" onClick={scrollUp}> </button>
            )}
        </aside>
    );
    
}