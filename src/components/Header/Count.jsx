import styled from "styled-components";
import { CartContext } from "../Cart";
import { useContext } from "react";

export default function Count() {
  const {cart} = useContext(CartContext);
  return (
    <Container>
      <span>{cart.length}</span>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 18px;
  left: 18px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.colors.five};
  color: white;
  border-radius: 50%;
`;
