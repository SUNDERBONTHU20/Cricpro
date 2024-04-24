import { Route, Routes } from 'react-router-dom';
import "./App.css";
import  LiveScore from "./Pages/Pages/LiveScore.jsx"
import Appbar from './Pages/Appbar/Appbar.jsx';
import Footer from './Pages/Footer/Footer.jsx'
import LoginPage from './Pages/login/LoginPage.jsx';
function App() {
  return (
    <div className="App">
    <Appbar/>
      <Routes>
      <Route path="/" element={<LiveScore />} />
      <Route path="/LoginPage" element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
