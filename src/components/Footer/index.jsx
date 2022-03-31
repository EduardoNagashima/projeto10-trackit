import { PageFooter, StyledLink } from "./style";

export default function Footer() {
    return (
        <PageFooter>
            <StyledLink to="/habits">
                <span>Hábitos</span>
            </StyledLink>
            <div>
                Hoje
            </div>
            <StyledLink to="/historic">
                <span>Histórico</span>
            </StyledLink>
        </PageFooter>
    );
}