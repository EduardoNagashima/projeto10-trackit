import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./../style/reset.css";
import "./../style/style.css";
import Home from "./Home";
import SignIn from "./SignIn";
import Today from "./Today";
import Habits from "./Habits";
import Historic from "./Historic";
import UserContext from "../contexts/UserContext";

export default function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [percentage, setPercentage] = useState(0);
    const [profileImg, setProfileImg] = useState('https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image-365x365.png');

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        setProfileImg(localStorage.getItem("img"));
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ token, percentage, setPercentage, profileImg }}>
                <Routes>
                    <Route path="/" element={<Home token={token}
                        saveToken={(token) => setToken(token)}
                        saveImg={(profileImg) => setProfileImg(profileImg)}
                    />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/historic" element={<Historic />} />
                    <Route path="/habits" element={<Habits />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}