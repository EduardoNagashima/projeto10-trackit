import styled from "styled-components";

export const Main = styled.main`
    background: #E5E5E5;
    min-width: 375px;
    width: 100%;
    height: 100vh;
    padding: 20px;

    span{
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`

export const UserHabits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    p{
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
`

export const NewHabitButton = styled.button`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
`

export const Habit = styled.div`
    margin: 0 auto;
    padding: 15px;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;

    h1 {
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 10px;
    }

    ion-icon {
        font-size: 15px;
        position: absolute;
        top: 11px;
        right: 10px;
    }
`

export const Button = styled.button`
        margin-right: 4px;
        width: 30px;
        height: 30px;
        background: ${props=> props.selected ? '#CFCFCF' : '#FFFFFF'};
        color: ${props=> props.selected ? '#FFFFFF' : '#CFCFCF'};
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 19.976px;
        line-height: 25px;
`