import Footer from "../Footer";
import Header from "./../Header";
import { TodayPage, SectionHabit, HabitTittle } from "./style";

export default function Today({ img }) {
    return (
        <>
            <Header img={img} />
            <TodayPage>
                <p>Segunda, 17/05</p>
                <span>Nenhum hábito concluído ainda</span>
                <Habit />
            </TodayPage>
            <Footer />
        </>
    );
}

function Habit() {
    return (
        <SectionHabit>
            <div>
                <HabitTittle>Ler 1 capítulo de livro</HabitTittle>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
            </div>
            <button>✓</button>
        </SectionHabit>
    );
}