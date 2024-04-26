import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSolidDish } from "react-icons/bi";


function Navbar() {
  return (
    <Nav>
      <BiSolidDish />
      <Logo to={'/'}>tastytrove</Logo>
    </Nav>
  )
};

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2.5rem;
  }
`;

export default Navbar;