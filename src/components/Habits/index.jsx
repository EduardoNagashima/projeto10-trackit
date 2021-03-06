import { useState, useContext, useEffect } from "react";
import { Triangle } from 'react-loader-spinner';
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import NewHabit from "../NewHabit";
import Header from "../Header";
import Footer from "../Footer";
import { Main, UserHabits, NewHabitButton, Habit, Button, LoaderDiv } from "./style";
import { useNavigate } from "react-router-dom";

export default function Habits() {

    const navigate = useNavigate();
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState(false);
    const { token } = useContext(UserContext);
    const [draft, setDraft] = useState('');
    const [loading, setLoading] = useState(false);
    const loader = <LoaderDiv><Triangle color="#52B6FF" height={150} width={150} /></LoaderDiv>

    if (!token) {
        navigate('/');
    }

    useEffect(() => {
        setLoading(true);
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
        }).finally(() => {
            setLoading(false);
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
        const confirmDelete = window.confirm("Tem certeza que quer apagar esse h??bito?");

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
                    <p>Meus h??bitos</p>
                    <NewHabitButton onClick={toggleButton}>+</NewHabitButton>
                </UserHabits>
                {newHabit && <NewHabit reloadPage={() => getHabit()} closeNewHabit={() => toggleButton()} getDraft={(draft) => setDraft(draft)} draft={draft} />}
                {loading && loader}
                {habits.length > 0 ? habitList : !loading && <span>Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para come??ar a trackear!</span>}
            </Main>
            <Footer />
        </>
    );
} 