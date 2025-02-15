import React, { useState, useEffect, useContext } from 'react'
import { ImageList, ImageListItem  } from '@mui/material'
import classNames from 'classnames'
import './style.scss'
import Pagination from './Pagination'
import heart from '../img/heart.png'
import {FavouriteContext} from '../context/context'

export default function Cats() {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [countCats] = useState(10)
    const {favourite, setFavourite} = useContext(FavouriteContext)
     const {favouriteList, setFavouriteList} = useContext(FavouriteContext)


    const lastIndex = countCats*currentPage
    const firstPAge = lastIndex - countCats
    const currentCats = data.slice(firstPAge, lastIndex)

    const addFavourite = async (url) => {
      if(favouriteList.includes(url)) {setFavouriteList(favouriteList.filter(cat => cat !== url))}
      else {
        setFavouriteList([...favouriteList, url])
        console.log(favouriteList);
      }
    }
    
    useEffect(() => {
        async function getData() {
        const response = await fetch('https://api.thecatapi.com/v1/breeds')
        const json = await response.json();
        setData(json)
    }
        getData()
}, [])

    

    const paginate = (PageNumbers) => {
        setCurrentPage(PageNumbers)
    }

   
  return (
    <>
    {
        data.length 
            ? <><ImageList   sx={{ width: '100%', height: '100%', 'overflow': 'hidden', 'position': 'relative', 'margin': '30px' }} cols={4} rowHeight={300} >
                {currentCats.map(item => (
                        <ImageListItem key={item?.id} style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
                            <img className='card' src={item.image?.url} alt="" style={{'width': '225px', 'maxHeight': '225px'}}/>
                            <img className={classNames('fav', favouriteList.includes(item.image?.url) ? 'active' : '')} onClick={() => addFavourite(item.image?.url)}  src={heart} alt=""/>

                        </ImageListItem>
                ))}
              </ImageList>
              <Pagination countCats={countCats} totalCats={data.length} paginate={paginate}/> </>
            : <h2>Loading...</h2>

    }
    

    </>
  )
}
