import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const HomepageBooksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
  flex-direction: row;
  margin-top: 100px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const HomepageBook = styled.div`
  width: 400px;
`;

export const HomePageButton = styled.button`
  border: none;
  outline: none;
  width: 100px;
  height: 40px;
  margin-left: 20px;
  color: white;
  background-color: black;
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

export const HomePageInput = styled.input`
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

export const HomePageLoadingText = styled.p`
  text-align: center;
  font-size: 20px;
  color: red;
  text-transform: uppercase;
`;
