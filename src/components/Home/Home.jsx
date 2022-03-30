import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { HomeScreen } from "./style";

export default function Home() {
    const navigate = useNavigate();
    return (
        <HomeScreen>
            <img src={Logo} alt="logo" />
            <h1>TrackIt</h1>
            <form onSubmit={() => navigate('/Habits')}>
                <input type="email" placeholder="email" required />
                <input type="password" placeholder="senha" required />
                <button type="submit">Entrar</button>
            </form>
            <Link to={'/SignIn'}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </HomeScreen>
    );
}