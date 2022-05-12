import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  margin-bottom: 50px;
`;

export const HeaderTitle = styled.p`
  color: white;
  font-size: 30px;
  height: 40px;
  margin: 0;
  margin-left: 30px;
`;

export const HeaderInput = styled.input`
  position: relative;
  height: 40px;
  width: 60%;
  font-size: 22px;
  margin-left: 80px;
  border-radius: 5px;
  border: 2px solid grey;
  transition: all 0.4s ease;
  &:hover,
  &:active,
  &:focus {
    border: 2px solid orange;
  }
`;

export const HeaderLinksContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 30px;
  gap: 20px;
`;

export const HeaderLink = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.4s ease;
  &:hover {
    color: orange;
  }
`;

export const HeaderButton = styled.button`
  border: none;
  outline: none;
  width: 100px;
  height: 40px;
  margin-left: 20px;
  color: black;
  background-color: white;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background-color: grey;
    color: orange;
  }
  &:active {
    background-color: grey;
    color: orange;
    width: 97px;
    height: 37px;
    transform: translateY(3px);
  }
`;
