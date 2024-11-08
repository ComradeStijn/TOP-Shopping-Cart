import styled from "styled-components";
import { useContext } from "react";
import { Container, Title } from "../Home/Home";
import { CartContext } from "../Cart";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const total = Math.round(cart.reduce((acc, curr) => acc + (curr.price * curr.amount), 0) * 100) / 100;

  return (
    <main>
      <Container>
        <Title>My Cart</Title>
        <StyledGrid>
          {cart.length
            ? <>
              {cart.map((item) => (
                <Fade key={item.id} direction="up" triggerOnce={true}>
                  <Card item={item} />
                </Fade>
              ))}
              <Total>
                <h1>Total</h1>
                <p>{total}€</p>
                <Button>Checkout</Button>
              </Total>
            </>
            : <Empty>Empty Cart</Empty>}
        </StyledGrid>
      </Container>
    </main>
  );
}

const Total = styled.div`
  font-family: "M PLUS 1p", sans-serif;
  margin-left: auto;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`

const StyledGrid = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr;
  padding: 1rem;
`;

const Empty = styled.h2`
  font-family: 'M PLUS 1p', sans-serif;
  text-align: center;
`

const Button = styled.button`
  font-family: "M PLUS 1p", sans-serif;
  font-size: 2rem;
  background-color: ${props => props.theme.colors.two};
  color: white;
  border: none;
  padding: 0.5rem 1rem;

  &:hover, &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.two};
    background-color: white;
    outline: 5px solid ${props => props.theme.colors.two};
  }
`