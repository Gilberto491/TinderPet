import "reactstrap";
import "./carrousel.scss";
import Cat1 from "img/cat1.png";
import Dog1 from "img/dog1.png";
import Dog3 from "img/dog3.png";

export default function Carrousel() {
    return (
        <aside className="slider-2">
            <div className="carrousel-line"></div>
            <div className="carousel-inner">
                <div className=" slider-2 carousel-dark slide " data-bs-ride="carousel">
                    <div className="container">
                        <div className="col-lg-12"> 
                            <div className="slider-container">
                                <div className="swiper-container text-slider">
                                    <div className="swiper-wrapper">
                                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">      
                                                    <div className="swiper-slide">
                                                        <div className="image-wrapper">
                                                            <img className="img-fluid" src={Dog3}  alt="alternative"/>
                                                            </div> 
                                                            <div className="text-wrapper">
                                                                <div className="testimonial-text">  “Muito obrigado pela oportunidade!! Aqui mesmo no TinderPet já consegui mais de 7 encontros diferentes e com outros tipos de raças e todos com resultados muito parecidos(tirando uma que mandou eu escovar os dentes). 
                                                                Indico demais essa plataforma, tenho certeza que aqui você vai encontrar o pet certo para você além de ter Experiências inesquecíveis.” <b><br/>Teddy</b></div>
                                                                <div className="testimonial-author"></div>
                                                                </div> 
                                                                </div> 
                                                            </div>

                                                <div className="carousel-item">
                                                    <div className="swiper-slide">
                                                        <div className="image-wrapper">
                                                            <img className="img-fluid" src={Dog1}  alt="alternative"/>
                                                        </div> 
                                                        <div className="text-wrapper">
                                                            <div className="testimonial-text">“Quero agradecer a todos os envolvidos pelo esforço, dedicação e trabalho!! Graças a essa plataforma descobri que não me dou bem com nenhum cachorro(a) e infelizmente não consegui reproduzir filhotes para meus donos. 
                                                            De qualquer forma sou muito grato por ter conseguido essa oportunidade e desejo uma boa sorte a todos os demais (nunca mexa na minha ração).” <b><br/>Dick</b></div>
                                                            <div className="testimonial-author"> </div>
                                                            </div> 
                                                            </div> 
                                                        </div>
                                                                                                            
                                                <div className="carousel-item">
                                                    <div className="swiper-slide">
                                                        <div className="image-wrapper">
                                                            <img className="img-fluid" src={Cat1}  alt="alternative"/>
                                                        </div> 
                                                        <div className="text-wrapper">
                                                            <div className="testimonial-text">“Minha mais sincera gratidão por todos os profissionais que administram essa página. Hoje sou muito feliz pois encontrei o gatinho dos sonhos e atráves dele consegui desfrutar momentos felizes!! 
                                                                                                    Hoje nós temos 27 filhotinhos e meus donos cuidam muito bem deles (Aliás se você quiser pegar um saiba que estou cuidando com muito amor e carinho &hearts; &hearts; &hearts;). ” <b><br/>Molly</b></div>
                                                            <div className="testimonial-author"></div>
                                                            </div> 
                                                            </div> 
                                                        </div>
                                                </div>

                                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon " aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>

                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </aside>
    );
}
