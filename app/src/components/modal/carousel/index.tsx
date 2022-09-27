import Matchs from "../matchs";
import Teste from "../../../img/cat1.png";
import Heart from "../../../img/heart.jpg";
import Detest from "../../../img/detest.jpg";
import Teddy from "../../../img/teddy.jpg";
import Dick from "../../../img/dick-femea.jpg";

export default function Carousel() {
    const backgroundTeddy = {background: `url(${Teddy}) center center/cover`};
    const backgroundDick = {background: `url(${Dick}) center center/cover`};
    const backgroundSnoopy = {background: `url(${Teddy}) center center/cover`};

    return (
        <div id="carouselid" className="carousel slide" >
            <div className="carousel-inner">  
                <div className="carousel-item active" >  
                     <div className="photo" style={backgroundTeddy}>
                        <Matchs
                            bio="Meu cachorro Teddy é um perfeito Spitz alemão anão- pomerânia. Ele tem 13 anos, sua cor é laranja e possui pedigree. Ele é lindo, dócil, não late, não morde, não é estressado e sim muito brincalhão."
                            title="Teddy"
                            age="13"
                        />
                   </div>
                </div>
                <div className="carousel-item" >
                    <div className="photo" style={backgroundDick}>
                    <Matchs
                         bio="Meu cachorro Teddy é um perfeito Spitz alemão anão- pomerânia. Ele tem 13 anos, sua cor é laranja e possui pedigree. Ele é lindo, dócil, não late, não morde, não é estressado e sim muito brincalhão."
                         title="Teddy"
                         age="13"
                    />
                    </div>
                </div>
                <div className="carousel-item">
                    <Matchs
                         bio="Meu cachorro Teddy é um perfeito Spitz alemão anão- pomerânia. Ele tem 13 anos, sua cor é laranja e possui pedigree. Ele é lindo, dócil, não late, não morde, não é estressado e sim muito brincalhão."
                         title="Teddy"
                         age="13"
                    />
                </div>
            </div>

            
            
            </div>
    );
}