import { useContext, useState, useEffect } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import Footer from "../Footer";
import Header from "./../Header";
import { TodayPage, SectionHabit, HabitTittle, Day, CheckButton, Percent } from "./style";

export default function Today() {

    const [habits, setHabits] = useState([]);
    const { percentage, setPercentage, token } = useContext(UserContext);
    const [total, setTotal] = useState(0);
    const [done, setDone] = useState(0);
    dayjs.locale('pt-br');

    changePercentage();

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
            setTotal(data.length);
            const countDones = data.filter(el => el.done);
            setDone(countDones.length);
        }).catch(err => {
            console.log(err.response.data.message);
        }).finally(() => {
            changePercentage();
        })
    }

    function changePercentage() {
        setPercentage((done / total) * 100);
    }

    function markHabit(id, done) {
        const config = { headers: { "Authorization": `Bearer ${token}` } }

        if (done === false) {
            const API_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            axios.post(API_URL, {}, config).then(() => {
            }).catch(err => {
                console.log(err.response.data.message);
            }).finally(() => {
                getHabits();
            })
        } else {
            const API_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
            axios.post(API_URL, {}, config).then(() => {
            }).catch(err => {
                console.log(err.response.data.message)
            }).finally(() => {
                getHabits();
            })
        }
        changePercentage();
    }

    useEffect(() => {
        getHabits();
    }, []);

    const habitList = habits && habits.map(habit => {
        const { id, name, done, highestSequence, currentSequence } = habit;
        return (
            <SectionHabit key={id}>
                <div>
                    <HabitTittle>{name}</HabitTittle>
                    <p>Sequência atual: {currentSequence} dias</p>
                    <p>Seu recorde: {highestSequence} dias</p>
                </div>
                <CheckButton onClick={() => markHabit(id, done)} done={done}>✓</CheckButton>
            </SectionHabit>
        );
    });

    return (
        <>
            <Header />
            <TodayPage>
                <Day>{dayjs().format('dddd, DD/MM')}</Day>
                <Percent percentage={percentage}>{percentage ? `${percentage}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</Percent>
                {habitList}
            </TodayPage>
            <Footer />
        </>
    );
}