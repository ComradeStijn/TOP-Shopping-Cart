import styled from "styled-components"

export default function Header() {
  return (
    <HeaderContainer>
      <Content>
        <Logo href="#">StijnShop</Logo>
        <nav>
          <a>Home</a>
          <a>Browse</a>
          <a>Cart</a>
        </nav>
      </Content>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.second};
  padding: 1rem;
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.break.tablet}) {
    width: 760px;
  }
  @media (min-width: ${props => props.theme.break.desktop}) {
    width: 1370px;
  }
`


const Logo = styled.a`
  font-family: 'Anton SC', sans-serif;
  padding: 5px 5px;
  font-size: 2rem;
  text-decoration: none;
  color: white;
  transition: transform 0.1s ease;

  &:hover {
    outline: 3px solid white;
    transform: scale(1.1);
  }

  @media (min-width: ${props => props.theme.break.tablet}) {
    font-size: 3rem;

    &:focus {
      outline: 3px solid white;
      transform: scale(1.1);
    }
  }
`