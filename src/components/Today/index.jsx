import { useContext, useState, useEffect } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import Footer from "../Footer";
import Header from "./../Header";
import { TodayPage, SectionHabit, HabitTittle, Day, CheckButton } from "./style";

export default function Today() {

    const [habits, setHabits] = useState([{}]);
    const { percentage, setPercentage, token } = useContext(UserContext);
    dayjs.locale('pt-br');

    function getHabits() {
        const URL_API = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(URL_API, config).then(response => {
            const { data } = response;
            setHabits(data);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getHabits();
    }, []);

    const habitList = habits === {} && habits.map(habit => {
        const { id, name, done, highestSequence, currentSequence } = habit;
        return (
            <SectionHabit key={id}>
                <div>
                    <HabitTittle>{name}</HabitTittle>
                    <p>Sequência atual: {currentSequence} dias</p>
                    <p>Seu recorde: {highestSequence} dias</p>
                </div>
                <CheckButton done={done}>✓</CheckButton>
            </SectionHabit>
        );
    })

    return (
        <>
            <Header />
            <TodayPage>
                <Day>{dayjs().format('dddd, DD/MM')}</Day>
                <span>Nenhum hábito concluído ainda</span>
                {habitList}
            </TodayPage>
            <Footer />
        </>
    );
}