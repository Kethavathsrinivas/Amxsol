import AboutUs from "./AboutUs";
import Footer from "./Footer.jsx"
import Navbar from "./Navbar/Navbar.jsx";
import './App.css'

function App() {
  return (
    <div className="app">
      <div className='content'>
      <Navbar/>
      </div>

      <div className='content'>
        <AboutUs/>
      </div>
      <div className='content'>

      <Footer/>
      </div>

    </div>
   
  );
}

export default App;
