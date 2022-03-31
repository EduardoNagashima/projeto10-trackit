import styled from "styled-components";

export const TodayPage = styled.main`
    min-width: 375px;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    height: 100%;
    background: #E5E5E5;
    padding-top: 28px;
    padding: 20px;

    p{
        color: #126BA5;
        font-size: 22.976px;
    }
    
    span {
        font-size: 17.976px;
        color: #BABABA;
    }
`

export const SectionHabit = styled.section`
    padding: 15px;
    margin: 0 auto;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

    button {
        width: 69px;
        height: 69px;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 50px;
        font-weight: 700;
    }

    div{

        p {
            font-size: 12.976px;
            color: #666666;
        }
    }
`

export const HabitTittle = styled.h1`
    color: #666666;
    font-size: 19.976px;
    margin-bottom: 10px;
    
`