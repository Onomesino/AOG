import Home from './Component/Home';
// import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Contact from './components/Contact';

// import Event from './components/Event';


function App() {
  return (
    <div classNameName="App">
      <BrowserRouter>
      {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Home />}/>
            
          </Routes>
          {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
