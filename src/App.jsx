import { useEffect} from 'react'
// import reactLogo from './assets/react.svg'
import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import Home from "./pages/Index";
import './App.css'
import "animate.css/animate.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
