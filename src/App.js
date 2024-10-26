import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './components/css/style.css'; 
import Event from './components/Event';


function App() {
  return (
    <div classNameName="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/events' element={<Event />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
