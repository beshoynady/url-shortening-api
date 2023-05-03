import './App.css';
import Boost from './component/boost/Boost';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import Shorten_link from './component/shorten-link/Shorten-link';
import Statistics from './component/statistics/Statistics';

function App() {
  return (
    <>
      <div>
        <Main/>
        <Shorten_link/>
        <Statistics/>
        <Boost/>
        <Footer/>
      </div>
    </>  
  );
}

export default App;
