import styled from "styled-components"
import { useState } from "react"
import Nav from "./Nav"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function clickOpen() {
    setIsOpen(prev => !prev)
  }

  return (
    <HeaderContainer>
      <Content>
        <Logo href="#">StijnShop</Logo>
        <NavToggle onClick={clickOpen}>☰</NavToggle>
        <Nav $isOpen={isOpen} />
      </Content>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  padding: 1rem;
  box-shadow: 0 1px 10px #43434364;
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: center;

  @media (min-width: ${props => props.theme.break.tablet}) {
    justify-content: space-between;
    width: 760px;
  }
  @media (min-width: ${props => props.theme.break.desktop}) {
    width: 1370px;
  }
`

const NavToggle = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  
  @media (min-width: ${props => props.theme.break.tablet}) {
    display: none;
  }
`


const Logo = styled.a`
  font-family: 'Anton SC', sans-serif;
  padding: 5px 5px;
  font-size: 2rem;
  text-decoration: none;
  color: black;
  transition: transform 0.1s ease;

  &:hover {
    outline: 3px solid black;
    transform: scale(1.1);
  }

  @media (min-width: ${props => props.theme.break.tablet}) {
    font-size: 3rem;

    &:focus {
      outline: 3px solid black;
      transform: scale(1.1);
    }
  }
`
