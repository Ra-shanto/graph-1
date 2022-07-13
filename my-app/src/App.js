import './App.css';
import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Hero from './Components/Hero';
import Feature from './Components/Feature';
import Control from './Components/Control';
import Different from './Components/Different';
import Proud from './Components/Proud';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Control/>
      <Different/>
      <Proud/>
    </div>
  );
}

export default App;
