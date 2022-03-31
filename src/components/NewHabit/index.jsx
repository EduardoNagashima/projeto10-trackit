import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Buttons, Button, Days, DaysButton, CreateHabit } from "./style";

export default function NewHabit({ reloadPage, closeNewHabit }) {
    const [habit, setHabit] = useState('');
    const [days, setDays] = useState([]);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(UserContext);

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
            <form onSubmit={createHabit}>
                <input type="text"
                    placeholder="nome do hábito"
                    onChange={e => setHabit(e.target.value)}
                    value={habit.name}
                    disabled={loading}
                    required />
                <Days required>
                    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((el, index) => (
                        <DaysButton key={index} disabled={loading}
                            selected={days.includes(index)} type="button"
                            onClick={() => selectDay(index)}>{el}</DaysButton>
                    ))}
                </Days>

                <Buttons>
                    <Button type="button" cancel>Cancelar</Button>
                    <Button type="submit">Salvar</Button>
                </Buttons>
            </form>
        </CreateHabit>
    );
}
