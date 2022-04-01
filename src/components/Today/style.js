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
    min-height: 100vh;
    margin-bottom: 70px;
    height: auto;
`

export const Day = styled.h1`
    margin: 0 auto;
    font-size: 22.976px;
    color: #126BA5;
    margin-bottom: 4px;
`

export const SectionHabit = styled.section`
    padding: 15px;
    margin: 0 auto;
    width: 340px;
    min-height: 94px;
    height: auto;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;

    div{   
        width: 75%;
        small {
            font-size: 12.976px;
            color: #666666;
        }
    }
`

export const HabitTittle = styled.h1`
    word-wrap: break-word;
    color: #666666;
    font-size: 19.976px;
    margin-bottom: 10px;
`

export const CheckButton = styled.button`
    cursor: pointer;
    box-sizing: border-box;
    min-width: 69px;
    min-height: 69px;
    max-width: 69px;
    max-height: 69px;
    background: ${props=> props.done ? '#8FC549' : '#E7E7E7'};
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 50px;
    font-weight: 700;
`

export const Percent = styled.span`
    font-size: 17.976px;
    color: ${props=>props.percentage ? '#8FC549' : '#BABABA'};
`

export const CurrentSeq = styled.p`
    display: inline;
    font-size: 12.976px;
    color: ${props=>props.done ? '#8FC549' : '#666666'};
`

export const RecordSeq = styled.p`
    display: inline;
    font-size: 12.976px;
    color: ${props=> props.currentRecord && props.hs !== 0 ? '#8FC549' : '#666666'};
`