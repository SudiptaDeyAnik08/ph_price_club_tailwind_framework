import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import PriceOption from './components/PriceOption/PriceOption';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>

     
      <p>This is paragraph</p>

     <PriceOption></PriceOption>
    </div>
  );
}

export default App;
