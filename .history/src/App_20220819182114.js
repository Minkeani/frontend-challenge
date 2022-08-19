import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Pagination from './components/Pagination';
import {FavouriteContext} from './context/context'

function App() {


  return (
    <div className="App">
        <Header/>
    </div>
  );
}

export default App;
