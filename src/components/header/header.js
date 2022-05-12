import React from "react";
import {
  HeaderContainer,
  HeaderLinksContainer,
  HeaderLink,
  HeaderTitle,
} from "./header-style";

const Header = () => {
  // Header sadrzi naziv aplikacije kao i linkove ka svim stranicama koje aplikacija poseduje
  return (
    <div>
      <HeaderContainer>
        <HeaderTitle>AppReader</HeaderTitle>
        <HeaderLinksContainer>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/books">Books</HeaderLink>
          <HeaderLink to="/lists">Lists</HeaderLink>
        </HeaderLinksContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
