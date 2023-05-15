import React from "react"
import styled from "styled-components"

const Item = styled.div`
    display: flex;
    flex-direction: column;

    .text{
        font-weight: bold;
    }
`

export default ({type, value, from}) => {
    return(
        <Item>
            <span className="text">{type}</span>
            <span>{value}</span>
            <span>{from}</span>
        </Item>
    )
}