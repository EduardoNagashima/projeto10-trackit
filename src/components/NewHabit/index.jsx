import { useState } from "react";
import { Buttons, Button, Days, CreateHabit } from "./style";

export default function NewHabit() {

    const { habit, setHabit } = useState({
        name: '',
        days: ''
    });

    function send() {
        console.log('uau');
    }

    return (
        <CreateHabit>
            <form onSubmit={send}>
                <input type="text"
                    placeholder="nome do hábito"
                    onChange={e => setHabit({ ...habit, habit: e.target.value })}
                    value={habit} required />
                <Days>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </Days>
            </form>
            <Buttons>
                <Button cancel>Cancelar</Button>
                <Button type="submit">Salvar</Button>
            </Buttons>

        </CreateHabit>
    );
}
