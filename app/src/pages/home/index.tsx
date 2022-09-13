import {Header, Banner, Footer, Carrousel, Modal} from "../../components";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Carrousel/>
      <Modal
        position="relative"
      />
      <Footer/>
    </div>
  );
}