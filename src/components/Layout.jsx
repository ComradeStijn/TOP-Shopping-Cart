import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";


function Layout() {
  return (
      <StyledLayout>
        {/* zIndex of 1 to ensure that dropdown menu falls on top of Hero element when rendering Home */}
        <Slide direction="down" triggerOnce={true} style={{ zIndex: 1}}><Header id="test" /></Slide>
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
