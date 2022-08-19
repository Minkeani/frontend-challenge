import React, {useContext} from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import heart from '../img/heart.png'
import {FavouriteContext} from '../context/context'
import './style.scss'

export default function Favourite() {

  const {favourite, setFavourite} = useContext(FavouriteContext)
  const {favouriteList, setFavouriteList} = useContext(FavouriteContext)

  return (
    <ImageList   sx={{ width: '100%', height: '100%', 'overflow': 'hidden', 'position': 'relative', 'margin': '30px' }} cols={4} rowHeight={300} >
                {favouriteList.map(item => (
                        <ImageListItem key={item?.id} style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
                            <img className='card' src={item.image?.url} alt="" style={{'width': '225px', 'maxHeight': '225px'}}/>
                            <img className={classNames('fav', favouriteList.includes(item.image?.url) ? 'active' : '')} onClick={() => setFavourite(false)}  src={heart} alt=""/>

                        </ImageListItem>
                ))}
    </ImageList>
  )
}
