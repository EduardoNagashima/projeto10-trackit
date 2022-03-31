import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./../style/reset.css";
import "./../style/style.css";
import Home from "./Home";
import SignIn from "./SignIn";
import Today from "./Today";
import Habits from "./Habits";
import Historic from "./Historic";
import UserContext from "../contexts/UserContext";

export default function App() {
    const [token, setToken] = useState(null);
    const [profileImg, setProfileImg] = useState('');

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ token, setToken }}>
                <Routes>
                    <Route path="/" element={<Home
                        saveToken={(token) => setToken(token)}
                        saveImg={(profileImg) => setProfileImg(profileImg)}
                    />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/today" element={<Today img={profileImg} />} />
                    <Route path="/historic" element={<Historic img={profileImg} />} />
                    <Route path="/habits" element={<Habits img={profileImg} />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}