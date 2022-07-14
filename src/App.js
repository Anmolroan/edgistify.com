
import './App.css';
import Allrouter from './pages/Allrouter';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import WhyUs from './pages/WhyUs';
import Solutions from './pages/Solutions';
import Footr from './components/Footr';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Allrouter/>
     <Footr/>
    </div>
  );
}

export default App;
