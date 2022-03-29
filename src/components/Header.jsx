import styled from "styled-components"
import Perfil from "./../assets/perfil.png"

export default function Header() {
    return (
        <PageHeader>
            <p>TrackIt</p>
            <img src={Perfil} alt="" />
        </PageHeader>
    )
}

const PageHeader = styled.header`
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;

    p{
        font-weight: 400;
        font-size: 38.982px;
        color: #FFFFFF;
        font-family: 'Playball';
    }
`