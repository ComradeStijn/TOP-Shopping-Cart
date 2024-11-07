import { Link } from "react-router-dom"
import styled from "styled-components"



const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  font-family: 'M PLUS 1p', sans-serif;
  color: ${props => props.theme.colors.one};
  transition: transform 0.1s ease;

  &:hover, &:focus {
    text-decoration: underline;
    transform: scale(1.1);
    color: black;
  }
`

export default StyledLink