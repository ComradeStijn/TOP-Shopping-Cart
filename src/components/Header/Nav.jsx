import PropTypes from "prop-types";
import styled from "styled-components";
import StyledLink from "./Link";
import Count from "./Count";
import { useContext } from "react";
import { CartContext } from "../Cart";

Nav.propTypes = {
  $isOpen: PropTypes.bool,
};

export default function Nav({ $isOpen }) {
  const { cart } = useContext(CartContext);

  return (
    <StyledNav $isOpen={$isOpen}>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/browse">BROWSE</StyledLink>
      <StyledCart to="/cart" style={{position: "relative"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
        </svg>
        {cart.length ? <Count /> : null}
      </StyledCart>
    </StyledNav>
  );
}

const StyledCart = styled(StyledLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${(props) => props.theme.break.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 8px;
    width: 200px;
  }

  @media (min-width: ${(props) => props.theme.break.tablet}) {
    display: flex;
    position: static;
    gap: 1.5rem;
  }
`;
