import styled from "styled-components";
import Hero from "./Hero";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();

  return (
    <main>
      <Fade delay={500} direction="left" triggerOnce={true}>
        <Hero />
      </Fade>
      <Fade delay={500} triggerOnce={true} direction="up">
        <Container>
          <Bestsellers>Our Bestsellers</Bestsellers>
          <Grid>
            {data.map((product) => (
              <Fade key={product.id} triggerOnce={true} cascade={true} damping={0.5} direction="up">
                <Card product={product} />
              </Fade>
            ))}
          </Grid>
        </Container>
      </Fade>
    </main>
  );
}

const Bestsellers = styled.h1`
  text-align: center;
  font-family: "Anton SC", sans-serif;
  font-weight: 300;
  font-size: 3rem;
  margin: 1rem auto;
`;

const Container = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  padding: 2rem;

  @media (min-width: ${(props) => props.theme.break.tablet}) {
    width: 760px;
  }
  @media (min-width: ${(props) => props.theme.break.desktop}) {
    width: 1360px;
  }
`;

const Grid = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: ${(props) => props.theme.break.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.break.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
