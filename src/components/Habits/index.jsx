import { useState } from "react";

import NewHabit from "../NewHabit";
import Header from "../Header";
import Footer from "../Footer";
import { Main } from "./style";

export default function Habits({ token, img }) {

    const [habits, setHabits] = useState([]);

    function getHabits() {
        if (habits.length > 0) {
            return <span>Map dos habitos na tela</span>
        }
        return <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
    }

    return (
        <>
            <Header img={img} />
            <Main>
                <div>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </div>

                {getHabits()}
                <NewHabit />
            </Main>

            <Footer />
        </>
    );
}