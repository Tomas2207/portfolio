import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects';

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
