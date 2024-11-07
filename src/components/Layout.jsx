import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

function Layout() {
  return (
      <StyledLayout>
        <Slide direction="down"><Header /></Slide>
        <Outlet />
        <Footer />
      </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export default Layout;
