import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { Main } from "./style";
import Header from "./../Header";
import Footer from "./../Footer";
import HabitCalendar from "./../HabitCalendar";
import UserContext from "../../contexts/UserContext";

export default function Historic() {
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    if (!token) {
        navigate('/');
    }

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