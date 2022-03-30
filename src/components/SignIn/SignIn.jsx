import { Link } from "react-router-dom";

import Logo from "./../../assets/logo.png";
import { SignInScreen } from "./style";

export default function SignIn() {
    return (
        <SignInScreen>
            <img src={Logo} alt="logo" />
            <h1>TrackIt</h1>
            <div>
                <form onSubmit={() => alert('Cadastrado!')}>
                    <input type="email" placeholder="email" required />
                    <input type="password" placeholder="senha" required />
                    <input type="text" placeholder="name" required />
                    <input type="text" placeholder="foto" required />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <Link to={'/'}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </SignInScreen>
    );
}