import Cat1 from "../../../img/cat1.png";
import Dog1 from "../../../img/dog1.png";
import Dog3 from "../../../img/dog3.png";
import Heart from "../../../img/heart.jpg";
import Detest from "../../../img/detest.jpg";
import "./carrousel.scss";

export default function Carrousel() {
    return (
        <aside>
          <div className="photo-and-actions">
            <div className="photo">
                <div className="photo-text">
                    <div className="photo-name-and-age">
                        <h2>Teddy</h2>
                        <h2>13</h2>
                    </div>
                    <div className="bio">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a facilis aliquid eligendi magnam adipisci obcaecati corrupti alias voluptate illum. Perferendis, harum amet! Doloremque ipsum rem quis voluptatem debitis dicta.
                    </div>
                </div>
            </div>

            <div className="actions">
                <div className="action">
                    <img className="action-image" src={Detest}/>
                </div>
                <div className="action">
                    <img className="action-image" src={Heart}/>
                </div>
            </div>
          </div>
        </aside>
    );
};