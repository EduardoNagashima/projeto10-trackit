import { useState, useContext, useEffect } from "react";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import NewHabit from "../NewHabit";
import Header from "../Header";
import Footer from "../Footer";
import { Main, UserHabits, NewHabitButton, Habit, Button } from "./style";

export default function Habits() {

    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState(false);
    const { token } = useContext(UserContext);

    useEffect(() => {
        getHabit();
    }, []);

    function getHabit() {
        const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(API_URL, config).then(response => {
            const { data } = response;
            setHabits(data);
        }).catch(err => {
            const errorMsg = err.response.data.message;
            console.log(errorMsg);
        });
    }

    const habitList = habits.map(habit => {
        const { id, name, days } = habit;
        return (
            <Habit key={id}>
                <ion-icon onClick={() => deleteHabit(id)} name="trash-outline"></ion-icon>
                <h1>{name}</h1>
                <div>
                    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((el, index) =>
                        <Button key={index} selected={days.includes(index)}>{el}</Button>
                    )}
                </div>
            </Habit>
        );
    })

    function deleteHabit(id) {
        const confirmDelete = window.confirm("Tem certeza que quer apagar esse hábito?");

        if (confirmDelete) {
            const API_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
            const config = { headers: { "Authorization": `Bearer ${token}` } }
            axios.delete(API_URL, config)
                .then(() => {
                    getHabit();
                })
                .catch(err => {
                    console.log(err);
                    const errorMsg = err.response.data.message;
                    alert('Algo deu errado! ' + errorMsg);
                })
        }
    }

    function toggleButton() {
        setNewHabit(!newHabit);
    }

    return (
        <>
            <Header />
            <Main>
                <UserHabits>
                    <p>Meus hábitos</p>
                    <NewHabitButton onClick={toggleButton}>+</NewHabitButton>
                </UserHabits>
                {newHabit && <NewHabit
                    reloadPage={() => getHabit()}
                    closeNewHabit={() => toggleButton()} />}
                {habits.length > 0 ? habitList : <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>}
            </Main>
            <Footer />
        </>
    );
}