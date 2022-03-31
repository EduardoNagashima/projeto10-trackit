import { useState } from "react";
import { Buttons, Button, Days, DaysButton, CreateHabit } from "./style";

export default function NewHabit() {
    const [habit, setHabit] = useState('');
    const [days, setDays] = useState([]);

    function createHabit(e) {
        e.preventDefault();
        const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    }

    function selectDay(num) {
        console.log(days)
        console.log(num)
        if (days.find(el => el === num)) {
            console.log('entrou no if, já existe');
            const newArray = days.filter(el => {
                if (el !== num) {
                    return el;
                }
            });
            setDays(newArray);
        } else {
            console.log('entrou no else (não repetiu)')
            setDays([...days, num])
        }
        console.log(days);
    }

    return (
        <CreateHabit>
            <form onSubmit={createHabit}>
                <input type="text"
                    placeholder="nome do hábito"
                    onChange={e => setHabit({ ...habit, name: e.target.value })}
                    value={habit.name} required />
                <Days>
                    <DaysButton selected={days.find(el => el === 0) ? true : false} type="button" onClick={() => selectDay(0)}>D</DaysButton>
                    <DaysButton selected={days.find(el => el === 1) ? true : false} type="button" onClick={() => selectDay(1)}>S</DaysButton>
                    <DaysButton selected={days.find(el => el === 2) ? true : false} type="button" onClick={() => selectDay(2)}>T</DaysButton>
                    <DaysButton selected={days.find(el => el === 3) ? true : false} type="button" onClick={() => selectDay(3)}>Q</DaysButton>
                    <DaysButton selected={days.find(el => el === 4) ? true : false} type="button" onClick={() => selectDay(4)}>Q</DaysButton>
                    <DaysButton selected={days.find(el => el === 5) ? true : false} type="button" onClick={() => selectDay(5)}>S</DaysButton>
                    <DaysButton selected={days.find(el => el === 6) ? true : false} type="button" onClick={() => selectDay(6)}>S</DaysButton>
                </Days>

                <Buttons>
                    <Button type="button" cancel>Cancelar</Button>
                    <Button type="submit">Salvar</Button>
                </Buttons>
            </form>
        </CreateHabit>
    );
}
