import { PageHeader } from "./style.js";
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";

export default function Header() {
    const { profileImg } = useContext(UserContext);

    return (
        <PageHeader>
            <p>TrackIt</p>
            <img src={profileImg} alt="profile-img" />
        </PageHeader>
    )
}