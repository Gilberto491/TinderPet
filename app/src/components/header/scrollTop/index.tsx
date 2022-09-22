import {useEffect, useState} from "react";
import "./scrollTop.scss";

export default function ScrollTop({page}: {page:boolean}) {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(page) {
                backToTop(540);
            } 
               else {
                backToTop(100);
            } 
        });
    }, []);

    const backToTop = (height: number) => {
        window.scrollY > height ? setBackToTopButton(true) : setBackToTopButton(false);
    };

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