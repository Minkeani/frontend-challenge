import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Pagination from './components/Pagination';

function App() {


  const [favourite, setFavourite] = useState(false)
  const [favouriteList, setFavouriteList] = useState([])

  return (
    <div className="App">
        <Header/>
    </div>
  );
}

export default App;
