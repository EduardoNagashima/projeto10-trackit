import { useState, useContext } from "react";

import NewHabit from "../NewHabit";
import Header from "../Header";
import Footer from "../Footer";
import UserContext from "../../contexts/UserContext";
import { Main, UserHabits, NewHabitButton } from "./style";

export default function Habits({ img }) {

    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState(false);
    const { token, setToken } = useContext(UserContext);

    console.log(token);

    function getHabits() {
        if (habits.length > 0) {
            return <span>Map dos habitos na tela</span>
        }
        return <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
    }

    function toggleButton() {
        setNewHabit(!newHabit);
    }

    return (
        <>
            <Header img={img} />

            <Main>

                <UserHabits>
                    <p>Meus hábitos</p>
                    <NewHabitButton onClick={toggleButton}>+</NewHabitButton>
                </UserHabits>

                {newHabit && <NewHabit />}
                {getHabits()}
            </Main>

            <Footer />
        </>
    );
}