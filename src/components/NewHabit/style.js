import styled from "styled-components";


export const CreateHabit = styled.div`
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
`

export const Days = styled.div`
    background-color: red;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    
        && button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            box-sizing: border-box;
            border-radius: 5px;
            font-size: 19.976px;
            color: #DBDBDB;
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