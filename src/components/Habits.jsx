import styled from "styled-components";
import { useState } from "react";

import Header from "./Header";


export default function Habits() {

    const [habits, setHabits] = useState([]);

    function getHabits() {
        if (habits.length > 0) {
            return <span>Map dos habitos na tela</span>
        }
        return <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
    }

    return (
        <>
            <Header />
            <Main>
                <div>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </div>
                {getHabits()}
            </Main>
        </>
    );
}

const Main = styled.main`
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
    padding: 20px;

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