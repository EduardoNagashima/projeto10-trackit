import { PageFooter, StyledLink } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    const percentage = 10;
    return (
        <PageFooter>
            <StyledLink to="/habits">
                <span>Hábitos</span>
            </StyledLink>
            <div>
                <StyledLink to="/today">
                    <div style={{ width: 91, height: 91, marginBottom: 40 }}>
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
                    </div>
                </StyledLink>
            </div>
            <StyledLink to="/historic">
                <span>Histórico</span>
            </StyledLink>
        </PageFooter>
    );
}