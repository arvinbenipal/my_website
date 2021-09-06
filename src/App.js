import React,{useState, useEffect} from 'react';
import './App.css';
import NavvBar from './components/NavvBar';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import Dropdown from './components/Dropdown';
import Sideebar from './components/Sideebar';



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  });
  
  return (
    <>
      <Sideebar />
      <NavvBar toggle ={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/> 
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      <Footer />

    </>
  );
}
export default App;