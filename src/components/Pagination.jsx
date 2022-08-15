import React from 'react';
import styled from 'styled-components';

const Pagination = ({countCats, totalCats, paginate}) => {

    const PageNumbers = []

    for(let i = 1; i <= Math.ceil((totalCats/countCats)); i++ ) {
        PageNumbers.push(i)
    }

    const Li = styled.li`
        border: 0.5px solid black;
        font-size: 18px;
        min-width: 32px;
        height: 32px;
        margin-right: 10px;
        border-radius: 5px;
        text-decoration: none;
        background: rgb(200 216 232)
    ;`

    return (
        <div>
            <ul className='pagination' style={{'listStyle': 'none', 'display': 'flex', 'justifyContent': 'center'}}>
                {PageNumbers.map(number => (
                        <Li className='page-item' key={number} onClick={() => {paginate(number)}} style={{'cursor': 'pointer'}}>
                                <a href="#" className='page-link' style={{'textDecoration': 'none'}} >{number}</a>
                        </Li>

                ))}
            </ul>
        </div>
    );
}

export default Pagination;
