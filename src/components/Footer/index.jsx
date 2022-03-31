import { PageFooter, StyledLink } from "./style";

export default function Footer() {
    return (
        <PageFooter>
            <StyledLink to="/habits">
                <span>Hábitos</span>
            </StyledLink>
            <div>
                <StyledLink to="/today"> Hoje </StyledLink>
            </div>
            <StyledLink to="/historic">
                <span>Histórico</span>
            </StyledLink>
        </PageFooter>
    );
}