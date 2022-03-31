import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Buttons, Button, Days, DaysButton, CreateHabit, ConfirmButton, NewHabitInput } from "./style";
import { Rings } from 'react-loader-spinner';

export default function NewHabit({ reloadPage, closeNewHabit }) {
    const [habit, setHabit] = useState('');
    const [days, setDays] = useState([]);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(UserContext);
    const loader = <Rings
        color="#FFF"
        height="35"
        width="84"
        ariaLabel='loading'
    />

    function createHabit(e) {
        e.preventDefault();

        if (days.length > 0) {
            setLoading(true);
            const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            axios.post(API_URL, {
                name: habit,
                days: days
            }, config).then(() => {
                alert('Novo hábito criado!');
                closeNewHabit();
                reloadPage();
            }).catch(err => {
                alert('Opa! Algo deu errado!')
                console.log(err);
            }).finally(() => {
                setLoading(false);
            })
            return;
        }
        alert('Selecione ao menos um dia!');
    }

    function selectDay(num) {
        if (days.includes(num)) {
            const newArray = days.filter(el => el !== num);
            setDays(newArray);
            return;
        }
        setDays([...days, num])
    }

    return (
        <CreateHabit>
            {console.log(habit)}
            <form onSubmit={createHabit}>
                <NewHabitInput type="text"
                    placeholder="nome do hábito"
                    onChange={e => setHabit(e.target.value)}
                    value={habit}
                    disabled={loading}
                    required />
                <Days>
                    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((el, index) => (
                        <DaysButton key={index} disabled={loading}
                            selected={days.includes(index)} type="button"
                            onClick={() => selectDay(index)}>{el}</DaysButton>
                    ))}
                </Days>

                <Buttons>
                    <Button disabled={loading} type="button" cancel onClick={() => closeNewHabit()}>Cancelar</Button>
                    <ConfirmButton disabled={loading} type="submit">{loading ? loader : 'Salvar'}</ConfirmButton>
                </Buttons>
            </form>
        </CreateHabit>
    );
}
