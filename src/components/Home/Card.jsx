import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

Card.propTypes = {
  product: PropTypes.object,
};

export default function Card({ product }) {
  const trucatedText = truncate(product.title, 35)

  return (
    <Article>
      <img src={product.image} />
      <ProductTitle>{trucatedText}</ProductTitle>
      <StyledLink to="#">Go to item</StyledLink>
    </Article>
  );
}

function truncate(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  } else {
    return text;
  }
}

const ProductTitle = styled.h2`
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 1.2rem;
  text-align: center;
`;

const Article = styled.article`
  height: 400px;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease;

  img {
    flex: 1;
    width: auto;
    max-height: 50%;
    max-width: 100%;
    object-fit: contain;
  }

  &:hover,
  &:focus {
    transform: translate(5px, -5px);
  }
`;

const StyledLink = styled(Link)`
  font-family: "M PLUS 1p", sans-serif;
  width: 100%;
  background-color: ${(props) => props.theme.colors.two};
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 100;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.two};
    background-color: white;
    outline: 5px solid ${(props) => props.theme.colors.two};
  }
`;
