import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/logo.png";
import { HomeScreen } from "./style";
import axios from "axios";

export default function Home({ saveToken, saveImg }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [info, setInfo] = useState({
        email: '',
        password: ''
    });

    function login(e) {
        setLoading(true);
        const { email, password } = info;
        e.preventDefault();
        const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        axios.post(API_URL, {
            email,
            password
        }).then(response => {
            const { data } = response;
            saveToken(data.token);
            saveImg(data.image);
            navigate('/today');
        }).catch(err => {
            console.log(err);
            const errorMsg = err.response.data.message;
            alert(`Opa! ${errorMsg}`);
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <HomeScreen>
            <img src={Logo} alt="logo" />
            <h1>TrackIt</h1>
            <form onSubmit={login}>
                <input type="email"
                    placeholder="email"
                    value={info.email}
                    onChange={e => setInfo({ ...info, email: e.target.value })}
                    required
                    disabled={loading}
                />
                <input type="password"
                    placeholder="senha"
                    value={info.password}
                    disabled={loading}
                    onChange={e => setInfo({ ...info, password: e.target.value })}
                    required />
                <button type="submit" disabled={loading}>Entrar</button>
            </form>
            <Link to={'/SignIn'}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </HomeScreen>
    );
}