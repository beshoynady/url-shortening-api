import './App.css';
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
      </div>
    </>  
  );
}

export default App;
