import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compo/Header';
import Banner from './compo/Banner';
import Features from './compo/Features';
import Explorer from './compo/Explorer';
import Services from './compo/Services';
import Footer from './compo/Footer';
import News from './compo/News';
import Video from './compo/Video';

function App() {
  return (
    <div className="App">

      <Header/>
      <Banner/>
      <Features/>
      <Explorer/>
      <Services/>
      <Video/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
