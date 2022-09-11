import {Header, Banner, Footer, Carrousel, Button} from '../../components';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Carrousel/>
      <Button
        position="relative"
      />
      <Footer/>
    </div>
  );
}