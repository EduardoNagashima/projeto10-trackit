import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';

import Logo from "../../assets/logo.png";
import { HomeScreen, Input, Button } from "./style";
import axios from "axios";

export default function Home({ saveToken, saveImg, token }) {

    const navigate = useNavigate();
    if (token) {
        navigate('/today');
    }
    const [loading, setLoading] = useState(false);
    const loader = <ThreeDots
        color="#FFF"
        height="13"
        width="303"
        ariaLabel='loading'
    />
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
            localStorage.setItem("token", data.token);
            localStorage.setItem("img", data.image);
            navigate('/today');
        }).catch(err => {
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
                <Input type="email"
                    placeholder="email"
                    value={info.email}
                    onChange={e => setInfo({ ...info, email: e.target.value })}
                    required
                    disabled={loading}
                />
                <Input type="password"
                    placeholder="senha"
                    value={info.password}
                    disabled={loading}
                    onChange={e => setInfo({ ...info, password: e.target.value })}
                    required />
                <Button type="submit" disabled={loading}>{loading ? loader : 'Entrar'}</Button>
            </form>
            <Link to={'/SignIn'}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </HomeScreen>
    );
}