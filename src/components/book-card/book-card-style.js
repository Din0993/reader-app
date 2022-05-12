import styled from "styled-components";

export const BookCardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  width: 400px;
  align-items: baseline;
  flex-direction: column;
  border: 1px solid grey;
  background-color: #d3d3d3c9;
  border-radius: 8px;
`;

export const BookCardTextContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
`;

export const BookCardInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const BookCardInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

export const BookCardButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BookCardImage = styled.img`
  height: 100px;
  width: 75px;
`;

export const BookCardTitle = styled.p`
  font-size: 22px;
  color: black;
  margin: 0;
`;

export const BookCardAddButton = styled.button`
  border: none;
  outline: none;
  width: 100px;
  height: 50px;
  color: white;
  background-color: black;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background-color: #323336;
    color: orange;
  }
  &:active {
    background-color: #323336;
    color: orange;
    width: 97px;
    height: 47px;
    transform: translateY(3px);
  }
`;

export const BookCardInput = styled.input`
  position: relative;
  height: 45px;
  font-size: 22px;
  border-radius: 5px;
  border: 2px solid grey;
  transition: all 0.4s ease;
  &:hover,
  &:active,
  &:focus {
    border: 2px solid orange;
  }
`;

export const BookCardLabel = styled.label`
  font-size: 22px;
  font-weight: 700;
`;

export const BookCardSelect = styled.select`
  height: 35px;
  font-size: 22px;
`;
