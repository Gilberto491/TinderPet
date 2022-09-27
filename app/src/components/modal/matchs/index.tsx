import Cat1 from "../../../img/cat1.png";
import Dog1 from "../../../img/dog1.png";
import Dog3 from "../../../img/dog3.png";
import Teddy from "../../../img/dick.jpg";
import Heart from "../../../img/heart.jpg";
import Detest from "../../../img/detest.jpg";
import "./matchs.scss";
import { title } from "process";

export default function Matchs(
    {bio, title, age}: {bio: string, title:string, age:string},
    ) {
    return (
        <aside>
          <div className="photo-and-actions">
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
                <div className="action">
                    <img className="action-image" data-bs-target="#carouselid" data-bs-slide="next" src={Detest}/>
                </div>
                <div className="action">
                    <img className="action-image" data-bs-target="#carouselid" data-bs-slide="next" src={Heart}/>
                </div>
            </div>
          </div>
        </aside>
    );
};