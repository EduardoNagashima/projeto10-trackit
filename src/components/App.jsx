import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./../style/reset.css";
import "./../style/style.css";
import Home from "./Home";
import SignIn from "./SignIn";
import Habits from "./Habits";

export default function App() {
    const [token, setToken] = useState(null);
    const [profileImg, setProfileImg] = useState('');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home
                    saveToken={(token) => setToken(token)}
                    saveImg={(profileImg) => setProfileImg(profileImg)}
                />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/habits" element={<Habits token={token} img={profileImg} />} />
            </Routes>
        </BrowserRouter>
    );
}