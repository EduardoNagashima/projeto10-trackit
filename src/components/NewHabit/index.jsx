import { Button, Days, CreateHabit } from "./style";

export default function NewHabit() {
    return (
        <CreateHabit>
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

        </CreateHabit>
    );
}
