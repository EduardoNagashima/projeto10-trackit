import { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import { NewHabit, Main, Days, Button } from "./style";

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

                <NewHabit>
                    <input type="text" placeholder="nome do hábito" required />
                    <Days>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </Days>
                    <div>
                        <Button cancel>Cancelar</Button>
                        <Button>Salvar</Button>
                    </div>
                </NewHabit>

            </Main>

            <Footer />
        </>
    );
}