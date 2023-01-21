import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home.jsx';
import About from './Components/pages/About.jsx';
import Coding from './Components/pages/Coding.jsx';
import Navbar from './static/Navbar.jsx';
import Cv from './Components/pages/Cv.jsx';
import Contact from './Components/pages/Contact';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/cv' element={<Cv></Cv>}></Route>
      <Route path='/projects' element={<Coding></Coding>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
