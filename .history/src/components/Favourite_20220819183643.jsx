import React, {useContext} from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import {FavouriteContext} from '../context/context'
import './style.scss'

export default function Favourite() {

  const {favourite, setFavourite} = useContext(FavouriteContext)
  const {favouriteList, setFavouriteList} = useContext(FavouriteContext)

  return (
    <ImageList   sx={{ width: '100%', height: '100%', 'overflow': 'hidden', 'position': 'relative', 'margin': '30px' }} cols={4} rowHeight={300} >
      {JSON.parse(localStorage.getItem('1')).map(item => (
        <ImageListItem key={item} style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
         <img className='card' src={item} alt="" style={{'width': '225px', 'maxHeight': '225px'}}/>
        </ImageListItem>
      ))}
  </ImageList>
  )
}
