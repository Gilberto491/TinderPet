import Cat1 from "img/cat1.png";
import Dog1 from "img/dog1.png";
import Dog3 from "img/dog3.png";
import Teddy from "img/dick.jpg";
import Heart from "img/heart.jpg";
import Detest from "img/detest.jpg";
import Dick from "img/dick-femea.jpg";
import "./matchs.scss";
import { title } from "process";
import ReactConfetti from "react-confetti";
import React, {useEffect, useState} from "react";

const ConfettiAction = () => {
    
};

export default function Matchs(
    {bio, title, age}: {bio: string, title:string, age:string},
    ) {
        const [btn, setBtn] = useState(false);
        const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight});
        const detectSize = () => {
            setWindowDimension({width: window.innerWidth, height: window.innerHeight});
        };

        useEffect(() => {
            window.addEventListener("resize", detectSize);
            return () => {
                window.removeEventListener("resize", detectSize);
            };
        }, [windowDimension]);
        
    return (
        <aside>
            <div className="photo">
                <div className="photo-text">
                    <div className="photo-name-and-age">
                        <h2>{title}</h2>
                        <h2>{age}</h2>
                    </div>
                    <div className="photo-bio">
                        {bio}
                    </div>
                </div>
            </div>

            <div className="actions" >
                <div className="action" onClick={() => setBtn(btn == false)}>
                    <img className="action-image" data-bs-target="#carouselid" data-bs-slide="next" src={Detest}/>
                </div>
                <div className="action" onClick={() => setBtn(btn == true)}>
                    <img className="action-image" data-bs-target="#carouselid" data-bs-slide="next" src={Heart}/>
                    {btn && <ReactConfetti
                            width={windowDimension.width}
                            height={windowDimension.height}
                        />}
                </div>
            </div>
        </aside>
    );
};