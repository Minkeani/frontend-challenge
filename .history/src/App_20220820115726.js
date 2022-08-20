import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Pagination from './components/Pagination';
import {FavouriteContext} from './context/context'
import { BrowserRouter } from "react-router-dom";

function App() {

  const [favouriteList, setFavouriteList] = useState([])

  return (
    <div className="App">

      <FavouriteContext.Provider
        value={{
          favouriteList,
          setFavouriteList
        }}
      >
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </FavouriteContext.Provider>
      
       
    </div>
  );
}

export default App;
