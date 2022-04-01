import { PageFooter, StyledLink, ProgressDiv } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";

import UserContext from "../../contexts/UserContext";

export default function Footer() {

    const { percentage, setPercentage } = useContext(UserContext);

    return (
        <PageFooter>
            <StyledLink to="/habits">
                <span>Hábitos</span>
            </StyledLink>
            <StyledLink to="/today">
                <ProgressDiv>
                    <CircularProgressbar
                        value={percentage}
                        text={'Today'}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
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