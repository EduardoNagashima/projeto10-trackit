import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageFooter = styled.footer`
    z-index: 1;
    width: 100%;
    min-width: 375px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background-color: #FFFFFF;
    padding: 30px;
    
    span {
        color: #52B6FF;
        font-size: 17.976px;
        text-align: center;
    }
`

export const StyledLink  = styled(Link)`
     text-decoration: none;
`;

export const ProgressDiv = styled.div`
    margin-bottom: 45px;
    width: 91px;
    height: 91px;
`