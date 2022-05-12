import styled from "styled-components";

export const HomepageContainer = styled.div`
  border: 2px solid grey;
  background-color: #e9e9e9a9;
  padding: 20px;
  border-radius: 10px;
  margin: 30px 100px;
  padding-bottom: 50px;
  @media only screen and (max-width: 641px) {
    width: 95%;
    margin: 0;
    padding: 10px 0;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HomepageBooksContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;
  height: 50%;
  flex-wrap: wrap;
  gap: 20px;
`;
