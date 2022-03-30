import { PageHeader } from "./style.js";

export default function Header({ img }) {
    const defaultImg = "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image-365x365.png"
    return (
        <PageHeader>
            <p>TrackIt</p>
            <img src={img ? img : defaultImg} alt="profile-img" />
        </PageHeader>
    )
}