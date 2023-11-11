
import './App.css';
import Banners from './components/Banners.js';
import Navbar from "./components/Navbar.js";
import Movies from "./components/Movies.js";
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import WatchList from './components/WatchList.js';



function App() {
  return (
    <>
       <BrowserRouter>
      <Navbar/>
 
    <Routes>
      <Route path="/" element={
        <>
          <Banners/>
          <Movies/>
        </>

      }>

      </Route>
      <Route path="/watchlist" element={<WatchList/>}></Route>

    </Routes>
    </BrowserRouter>
  
  
   

    </>
  )
   
}

export default App;
