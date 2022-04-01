import { PageFooter, StyledLink, ProgressDiv } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";

export default function Footer() {

    const { percentage } = useContext(UserContext);
    return (
        <PageFooter>
            <StyledLink to="/habits">
                <span>Hábitos</span>
            </StyledLink>
            <StyledLink to="/today">
                <ProgressDiv>
                    <CircularProgressbar
                        value={percentage}
                        text={percentage === 100 ? 'Feito!' : 'Hoje'}
                        background
                        backgroundPadding={6}
                        styles={percentage === 100 ? buildStyles({
                            backgroundColor: "#f7f7f7",
                            textColor: "#52B6FF",
                            pathColor: "#ccf3ff",
                            trailColor: "transparent",
                            textSize: "20px"
                        }) : buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#FFFFFF",
                            pathColor: "#FFFFFF",
                            trailColor: "transparent",
                            textSize: "18px"
                        })}
                    />
                </ProgressDiv>
            </StyledLink>
            <StyledLink to="/historic">
                <span>Histórico</span>
            </StyledLink>
        </PageFooter>
    );
}