import PropTypes from "prop-types"
import styled from "styled-components"
import StyledLink from "./Link"

Nav.propTypes = {
  $isOpen: PropTypes.bool,
}

export default function Nav({ $isOpen }) {
  return (
    <StyledNav $isOpen={$isOpen}>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/browse">BROWSE</StyledLink>
          <StyledLink to="/cart">CART</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${props => props.theme.break.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0,0,0, 0.5);
    padding: 20px;
    border-radius: 8px;
    width: 200px;
  }

  @media (min-width: ${props => props.theme.break.tablet}) {
    display: flex;
    position: static;
    gap: 1.5rem;
  }
`
