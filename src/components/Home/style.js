import styled from "styled-components";

export const HomeScreen = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    img {   
        width: 150px;
        margin: 0 auto;
        margin-top: 68px;
    }

    h1{
        font-family: 'Playball';
        font-weight: 400;
        font-size: 68.982px;
        text-align: center;
        color: #126BA5;
        margin-bottom: 32px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
    }

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        font-weight: 400;
        font-size: 19.976px;
        color: #000;
        padding-left: 11px;
        ::placeholder{
            color: #DBDBDB;
        }
    }

    button{
        width: 303px;
        height: 45px;
        left: 36px;
        top: 381px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 25px;
        cursor: pointer;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        align-self: center;
        color: #52B6FF;
    }
`