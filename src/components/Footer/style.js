import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageFooter = styled.footer`
    min-width: 375px;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    
    span {
        color: #52B6FF;
        font-weight: 400;
        font-size: 17.976px;
        text-align: center;
        text-decoration: none;
    }
`

export const StyledLink  = styled(Link)`
     text-decoration: none;
`;

export const progressDiv = styled.div`

`