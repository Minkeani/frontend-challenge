import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

import App from './App';
import { BrowserRouter } from "react-router-dom";
import {FavouriteContext} from './context/context'

const root = ReactDOM.createRoot(document.getElementById('root'));

const [favourite, setFavourite] = useState(false)
const [favouriteList, setFavouriteList] = useState([])


root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
);

