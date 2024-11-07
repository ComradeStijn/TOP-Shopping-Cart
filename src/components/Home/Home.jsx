import styled from "styled-components";
import Hero from "./Hero";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <main>
      <Fade delay={500}  direction="left" ><Hero /></Fade>
      
      
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
