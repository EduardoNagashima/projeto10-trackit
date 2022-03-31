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