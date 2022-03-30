import { PageHeader } from "./style.js";

export default function Header({ img }) {
    return (
        <PageHeader>
            <p>TrackIt</p>
            <img src={img} alt="profile-img" />
        </PageHeader>
    )
}