import { PageHeader } from "./style.js";

import Perfil from "./../../assets/perfil.png";

export default function Header() {
    return (
        <PageHeader>
            <p>TrackIt</p>
            <img src={Perfil} alt="" />
        </PageHeader>
    )
}