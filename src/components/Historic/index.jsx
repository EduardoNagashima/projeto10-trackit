import Header from "./../Header";
import Footer from "../Footer";
import { Main } from "./style";

export default function Historic({ img }) {
    return (
        <>
            <Header img={img} />
            <Main>
                <div>
                    <p>Histórico</p>
                    <span>Em breve você pçoderá ver o histórico dos seus hábitos aqui!</span>
                </div>
            </Main>
            <Footer />
        </>
    );
}