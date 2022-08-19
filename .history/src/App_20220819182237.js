import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Pagination from './components/Pagination';
import {FavouriteContext} from './context/context'
import { BrowserRouter } from "react-router-dom";

function App() {

  const [favourite, setFavourite] = useState(false)
  const [favouriteList, setFavouriteList] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
