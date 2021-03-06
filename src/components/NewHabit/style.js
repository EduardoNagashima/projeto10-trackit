import styled from "styled-components";

export const CreateHabit = styled.div`
    margin: 0 auto;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 18px;
    margin-bottom: 30px;
`

export const NewHabitInput = styled.input`
        font-family: 'Lexend Deca';
        width: 303px;
        height: 45px;
        background-color: ${props=> props.disabled ? '#F2F2F2' : '#FFFFFF'};
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        padding: 11px;
        margin-bottom: 11px;
        ::placeholder{ 
            color: #DBDBDB;
        }
`


export const Days = styled.div`
    display: flex;
    justify-content: flex-start;
    gap:4px;
    margin-bottom: 29px;
`

export const DaysButton = styled.button`
    cursor: pointer;
    font-family: 'Lexend Deca';
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 19.976px;
    color: ${props=> props.selected ? '#FFFFFF' : '#DBDBDB' };
    background: ${props=> props.selected ? '#DBDBDB' : '#FFFFFF'};
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Button = styled.button`
    cursor: pointer;
    width: 84px;
    height: 35px;
    font-family: 'Lexend Deca';
    border-radius: 4.63636px;
    font-size: 15.976px;
    border: none;
    color: #52B6FF;
    background: #FFFFFF;
`

export const ConfirmButton = styled.button`
    cursor: pointer;
    width: 84px;
    height: 35px;
    font-family: 'Lexend Deca';
    border-radius: 4.63636px;
    font-size: 15.976px;
    border: none;
    color: #FFFFFF;
    background: ${props=>props.disabled ? '#91cffd' : '#66b8fd'}
`