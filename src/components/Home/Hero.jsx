import styled from "styled-components";
import backgroundIMG from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <h1>THE OCTOBER COLLECTION</h1>
        <StyledLink to="/browse">Check it out!</StyledLink>
      </HeroTextContainer>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  background-image: url(${backgroundIMG});
  background-color: black;
  background-attachment: fixed;
  background-size: 1200px;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  height: 500px;
  max-width: 2000px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.break.tablet}) {
    background-size: 1500px;
    background-position: top;
  }
  @media (min-width: ${(props) => props.theme.break.desktop}) {
    background-size: 2000px;
    background-position: 50% 25%;
  }
`;

const HeroTextContainer = styled.div`
  background-color: #ffffff7c;
  padding: 2rem;

  h1 {
    font-family: "M PLUS 1p", sans-serif;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: ${props => props.theme.break.desktop}) {
    position: relative;
    right: 20%;
  }
`;

const StyledLink = styled(Link)`
  font-family: "M PLUS 1p", sans-serif;
  display: inline-block;
  margin-left: 3rem;
  color: white;
  background-color: black;
  padding: 1rem;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.2s ease-out;

  &:hover, &:focus {
    transform: scale(1.1);
    outline: 2px solid black;
    background-color: inherit;
    color: black;
  }
`;
