import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./../style/reset.css";
import "./../style/style.css";
import Home from "./Home";
import SignIn from "./SignIn";
import Habits from "./Habits";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Habits" element={<Habits />} />
            </Routes>
        </BrowserRouter>
    );
}