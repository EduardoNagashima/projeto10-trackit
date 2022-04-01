import styled from "styled-components";

export const HomeScreen = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    min-width: 375px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img {   
        margin: 0 auto;
        width: 150px;
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
        width: 303px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
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
        margin-bottom: 15px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 45px;
    background-color: ${props=> props.disabled ? '#F2F2F2' : '#FFFFFF'};
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
`
export const Button = styled.button`
        width: 100%;
        height: 45px;
        left: 36px;
        top: 381px;
        background: ${props=> props.disabled ? '#91cffd' : '#66b8fd'};
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
`