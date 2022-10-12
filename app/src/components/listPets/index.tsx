import "./listPets.scss";
import Teddy from "img/dog3.png";

export default function ListPets() {
    return (
      <aside className="text-center">
        <img src="https://avatars.githubusercontent.com/u/56416760?v=4" alt="mdo" width="128" height="128" className="rounded-circle image-profile"/>
        <div>
            <h3 className="listPets-name">Gilberto Fredes</h3>
            <p className="listPets-email">juniorfredes8@gmail.com</p>
        </div>
        <div className="listPets-title">
            <h2 className="listPets-title">seus matchs</h2>
        </div>
        
        <div className="row row-cols-1 row-cols-md-5 g-4 listPets-margin-bottom listPets-margin-left">
        <div className="col">
          <div className="card h-100">
            <img src={Teddy} className="listPets-size-img" alt="img dog"/>
            <div className="card-body">
              <h5 className="card-title">Teddy</h5>
              <p className="card-text listPets-desc">Meu cachorro Teddy é um perfeito Spitz alemão anão- pomerânia. Ele tem 2 anos, sua cor é laranja e possui pedigree.
              Ele é lindo, dócil, não late, não morde, não é estressado e sim muito brincalhão, carinhoso, atencioso...</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">3 mins ago</small>
            </div>
            </div>
          </div>
        </div>
      </aside>
    );
}