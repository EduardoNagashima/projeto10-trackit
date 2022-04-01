import Header from "./../Header";
import Footer from "./../Footer";
import HabitCalendar from "./../HabitCalendar"
import { Main } from "./style";

export default function Historic() {
    return (
        <>
            <Header />
            <Main>
                <div>
                    <p>Histórico</p>
                </div>
                <HabitCalendar />
            </Main>
            <Footer />
        </>
    );
}