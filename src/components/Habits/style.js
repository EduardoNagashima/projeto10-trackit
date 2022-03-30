import styled from "styled-components";

export const Main = styled.main`
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
    padding: 20px;

    span {
        font-size: 17.976px;
        color: #666666;
        }

    div{
        display: flex;
        justify-content: space-between;

        p{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }

        button{
            text-align: center;
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;
            border: none;
            font-size: 26.976px; 
            line-height: 34px;
            color: #FFFFFF;
        }
    }


    
`

export const NewHabit = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    display: flex;
    flex-direction: column;

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: 11px;
        font-size: 19.976px;
        ::placeholder{
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }

    div{
        display: flex;
        justify-content: flex-end;
        align-self: flex-end;
/* 
        button {
            width: 84px;
            height: 35px;
            background: ${props => props.cancel ? "white" : "red"};
            border-radius: 4.63636px;
            color: #FFFFFF;
            text-align: center;
            font-size: 15.976px;
            } */
    }

`

export const Days = styled.div`
    width: auto;
    display: flex;
    justify-content: flex-start;

        && button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            box-sizing: border - box;
            border-radius: 5px;
            font-size: 19.976px;
            color: #DBDBDB;
            margin-right: 4px;
        }
`

export const Button = styled.button`
    width: 84px;
    height: 35px;
    background: ${props => props.cancel ? "white" : "red"};
    border-radius: 4.63636px;
    color: #FFFFFF;
    text-align: center;
    font-size: 15.976px;
`