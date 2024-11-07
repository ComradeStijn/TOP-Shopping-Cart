import { useEffect, useState } from "react";
import fetchItems from "../Home/fetch";
import { Container, Title } from "../Home/Home";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Card from "./Card";
import { Grid } from "../Home/Home";

export default function Browse() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchItems(20).then((data) => {
      setItems(data);
    });
  }, []);

  function inputSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <Container>
        <Title>OUR PRODUCTS</Title>
        <Searchbar
          name="search"
          placeholder="Search products"
          value={search}
          onChange={inputSearch}
        />
        <WiderGrid>
          {items.length > 0 ? (
            filteredItems.map(item => (
              <Fade key={item.id} direction="up">
                <Card  product={item} />
              </Fade>
            ))
          ) : (
            null
          )}
        </WiderGrid>
      </Container>
    </main>
  );
}

const Searchbar = styled.input`
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  font-family: "M PLUS 1p", sans-serif;
  font-size: 2rem;
  border-radius: 500px;
`;

const WiderGrid = styled(Grid)`
  grid-template-columns: 1fr;

  
  @media (min-width: ${(props) => props.theme.break.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
