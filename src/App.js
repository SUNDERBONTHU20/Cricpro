import { Route, Routes } from 'react-router-dom';
import "./App.css";
import  LiveScore from "./Pages/LiveScore.jsx"
import Appbar from './Pages/Appbar.jsx';
import Footer from './Pages/Footer.jsx'
function App() {
  return (
    <div className="App">
    <Appbar/>
      <Routes>
      <Route path="/" element={<LiveScore />} />
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
