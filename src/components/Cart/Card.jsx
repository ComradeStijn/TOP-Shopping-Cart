import styled from "styled-components";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { fetchById } from "../fetch";
import { CartContext } from "../Cart";

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default function Card({ item }) {
  const [product, setProduct] = useState({});
  const { deleteCartContext } = useContext(CartContext);

  useEffect(() => {
    fetchById(item.id).then((data) => setProduct(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Article>
      <div>
        <img src={product.image} />
      </div>
      <Title>{product.title}</Title>
      <Price>
        <em>Each</em> <br />
        {product.price}€
      </Price>
      <Amount>
        <em>Count</em>
        <br />
        <Count placeholder={item.amount} />
        <Button onClick={() => deleteCartContext(item.id)}>X</Button>
      </Amount>
    </Article>
  );
}

const Article = styled.article`
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: grid;
  gap: 3rem;
  font-family: "M PLUS 1p", sans-serif;

  img {
    max-height: 300px;
    max-width: 300px;
    height: auto;
    width: auto;
    object-fit: contain;
    justify-self: center;
  }

  @media (max-width: ${(props) => props.theme.break.tablet}) {
    grid-template-rows: 300px 1fr 1fr 1fr;
  }

  @media (min-width: ${(props) => props.theme.break.tablet}) {
    grid-template-columns: 300px 3fr 1fr 1fr;
  }
`;

const Title = styled.h1`
  font-size: 1.4rem;
`;

const Price = styled.h1``;

const Amount = styled.h1``;

const Count = styled.input`
  width: 5ch;
`;

const Button = styled.button`
  margin: 1rem;
  background-color: #c70000;
  color: white;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 10px;

  &:hover,
  &:focus {
    cursor: pointer;
    color: #c70000;
    background-color: white;
    outline: 3px solid #c70000;
  }
`;
