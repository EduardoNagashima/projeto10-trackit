import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "./../../assets/logo.png";
import { SignInScreen } from "./style";

export default function SignIn() {

    const [info, setInfo] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });

    function register(e) {
        e.preventDefault();
        console.log(info);
    }

    return (
        <SignInScreen>
            <img src={Logo} alt="logo" />
            <h1>TrackIt</h1>
            <div>
                <form onSubmit={register}>
                    <input type="email" placeholder="email" value={info.email}
                        onChange={e => setInfo({ ...info, email: e.target.value })} required />
                    <input type="password" placeholder="senha" value={info.password}
                        onChange={e => setInfo({ ...info, password: e.target.value })} required />
                    <input type="text" placeholder="name" value={info.name}
                        onChange={e => setInfo({ ...info, name: e.target.value })} required />
                    <input type="text" placeholder="foto" value={info.image}
                        onChange={e => setInfo({ ...info, image: e.target.value })} required />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <Link to={'/'}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </SignInScreen>
    );
}