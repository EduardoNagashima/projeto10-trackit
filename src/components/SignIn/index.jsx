import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Rings } from 'react-loader-spinner';

import Logo from "./../../assets/logo.png";
import { SignInScreen, Button, Input } from "./style";

export default function SignIn() {

    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });
    const loader = <Rings
        color="#FFF"
        height="45"
        width="303"
        ariaLabel='loading'
    />

    const navigate = useNavigate();
    function register(e) {
        setLoading(true);
        const { email, name, image, password } = info;
        e.preventDefault();
        const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        axios.post(API_URL, {
            email,
            name,
            image,
            password
        }).then(() => {
            alert('Cadastro Realizado!');
            navigate("/");
        }).catch(err => {
            const errorMsg = err.response.data.message
            alert(`Erro!!! ${errorMsg}`)
        }).finally(() => {
            setLoading(false);
        });

    }

    function registerForm() {
        return (
            <form onSubmit={register}>
                <Input type="email" placeholder="email" value={info.email}
                    onChange={e => setInfo({ ...info, email: e.target.value })}
                    required disabled={loading} />
                <Input type="password" placeholder="senha" value={info.password}
                    onChange={e => setInfo({ ...info, password: e.target.value })}
                    required disabled={loading} />
                <Input type="text" placeholder="name" value={info.name}
                    onChange={e => setInfo({ ...info, name: e.target.value })}
                    required disabled={loading} />
                <Input type="text" placeholder="foto" value={info.image}
                    onChange={e => setInfo({ ...info, image: e.target.value })}
                    required disabled={loading} />
                <Button type="submit" disabled={loading}>{loading ? loader : 'Cadastrar'}</Button>
            </form>
        );
    }

    return (
        <SignInScreen>
            <img src={Logo} alt="logo" />
            <h1>TrackIt</h1>
            <div>
                {registerForm()}
            </div>
            <Link to={'/'}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </SignInScreen>
    );
}