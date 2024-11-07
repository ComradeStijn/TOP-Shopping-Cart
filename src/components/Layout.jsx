import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import styled from "styled-components";

function Layout() {
  return (
      <StyledLayout>
        <Header />
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
