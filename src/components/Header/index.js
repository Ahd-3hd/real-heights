import React from "react";
import MouseIcon from "@material-ui/icons/Mouse";
import {
  Wrapper,
  HeaderContent,
  HeaderText,
  ScrollButton
} from "./Header.style";

const Header = props => {
  return (
    <Wrapper>
      <HeaderContent>
        <HeaderText>
          <h2>Turkish Heights</h2>
          <p>{props.language ? "Paragraph in English" : "فقرة بالعربي"}</p>
        </HeaderText>
      </HeaderContent>
      <ScrollButton>
        <MouseIcon />
      </ScrollButton>
    </Wrapper>
  );
};

export default Header;
