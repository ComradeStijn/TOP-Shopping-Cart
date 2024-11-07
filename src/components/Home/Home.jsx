import styled from "styled-components";
import Hero from "./Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      
    </main>
  );
}

const Container = styled.div`
  background-color: #d1d1d190;
  height: 100%;
  margin: 1rem auto;

  @media (min-width: ${(props) => props.theme.break.tablet}) {
    width: 760px;
  }
  @media (min-width: ${(props) => props.theme.break.desktop}) {
    width: 1360px;
  }
`;
