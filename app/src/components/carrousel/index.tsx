import React, { Component } from 'react';
import 'reactstrap';
import "./carrousel.scss";
import Cat1 from "../../img/cat1.png";
  
  function Carrousel() {
    return (
        <aside>
             <div className="slider-2 carrousel">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">      
                            <div className="slider-container">
                                <div className="swiper-container text-slider">
                                    <div className="swiper-wrapper">
                                    
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src={Cat1}  alt="alternative"/>
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">“Minha mais sincera gratidão por todos os profissionais que administram essa página. Hoje sou muito feliz pois encontrei o gatinho dos sonhos e atráves dele consegui desfrutar momentos felizes!! 
                                                Hoje nós temos 27 filhotinhos e meus donos cuidam muito bem deles (Aliás se você quiser pegar um sabia que estou cuidando com muito amor e carinho).”</div>
                                                <div className="testimonial-author"><b>Jude</b></div>
                                            </div> 
                                        </div> 
                                    
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src={Cat1} alt="alternative"/>
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">“Agradeço pelo esforço, pela dedicação, pelas horas extras e pelo trabalho que os professores e os criadores dessa plataforma tiveram ao desempenhar essa oportunidade para todos os alunos. Hoje trabalho como técnico em redes!”</div>
                                                <div className="testimonial-author">Roy Smith - Redes de Computadores</div>
                                            </div> 
                                        </div> 
                                    
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src={Cat1}  alt="alternative"/>
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text"> “Muito obrigado pela oportunidade e por toda atenção dos professores pela preocupação que tiverem com os alunos postando vagas super relevantes.”</div>
                                                <div className="testimonial-author">Marsha Singer - Administração</div>
                                            </div> 
                                        </div> 

                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src={Cat1}  alt="alternative"/>
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">“O trabalho de vocês é o que faz a evolução do nosso ensino ser o que é hoje. Ninguém constrói nada sozinho, e hoje estou aqui para agradecer a todos os envolvidos nessa plataforma que estão dispostos a propor variedades de vagas conforme a área de interesse de cada aluno.”</div>
                                                <div className="testimonial-author">Ronda Louis - Sistemas para Internet</div>
                                            </div> 
                                        </div> 
                                    

                                    </div>
                                    
                                
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                

                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </aside>
    )
  }
  
  export default Carrousel;