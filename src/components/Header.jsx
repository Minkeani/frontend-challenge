import React from 'react'
import RoutesList from './routes/RoutesList'
import {Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'


export default function Header() {

    const navigate = useNavigate()

    const Header = styled.header`
        display: flex;
        max-width: 100%;
        font-size: 1.5rem;
        height: 70px;
        padding-left: 70px;
        margin: 0 auto;
        align-items: center;
        color: white;
        justify-content: flex-start;
        background: rgb(33 150 243);
    `
    const BtnCont = styled.button`
        height: 100%;
        text-decoration: none;
        width: 150px;
        background: rgb(33 150 243);
        border: none;
        cursor: pointer;
        font-weight: 700;
        &:hover {
            background: rgb(30 136 229);
          }
    `

  return (
    <>
    <Header>
        <BtnCont onClick={() => navigate('/')}>
            <Link style={{'textDecoration': 'none', 'color': 'white'}} to="/">Cats</Link>
        </BtnCont>
        <BtnCont onClick={() => navigate('/favourite')}>
            <Link style={{'textDecoration': 'none', 'color': 'white'}}  to="/favourite">Favourite cats</Link>
        </BtnCont>
        
    </Header>
    <RoutesList/>
    </>
  )
}
