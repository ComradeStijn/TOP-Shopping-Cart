import PropTypes from "prop-types";
import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../Cart";

Card.propTypes = {
  product: PropTypes.object,
};

export default function Card({ product }) {
  const [amount, setAmount] = useState(0);
  const { addCartContext } = useContext(CartContext);

  const truncatedDescription = truncate(product.description, 100);

  function changeAmount(e) {
    e.preventDefault();
    setAmount(e.target.value);
  }

  function addCart() {
    if (amount) {
      addCartContext(product.id, amount);
    }
  }

  return (
    <Article>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{truncatedDescription}</p>
      <BuyDiv>
        <AmountInput
          type="number"
          value={amount}
          onChange={changeAmount}
          min="0"
          max="5"
          step="1"
          required
        />
        <AddCart onClick={addCart}>Add to cart - {product.price}€</AddCart>
      </BuyDiv>
    </Article>
  );
}

function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
}

const Article = styled.article`
  height: 100%;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-rows: 400px auto 1fr auto;
  font-family: "M PLUS 1p", sans-serif;

  img {
    padding: 1rem;
    max-height: 100%;
    max-width: 100%;
    align-self: center;
    justify-self: center;
    object-fit: contain;
  }

  h1 {
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
  }
`;

const BuyDiv = styled.div`
  margin: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const AmountInput = styled.input`
  width: 3.5rem;
  padding: 0.5rem;
  height: max-content;
  font-size: 1.5rem;
`;

const AddCart = styled.button`
  flex: 1;
  background-color: ${(props) => props.theme.colors.two};
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;

  &:hover, &:focus {
    cursor: pointer;
    transform: scale(1.05);
    outline: 3px solid ${(props) => props.theme.colors.two};
    background-color: white;
    color: ${(props) => props.theme.colors.two};
  }
`;
