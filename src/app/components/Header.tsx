import React from "react";
import * as Style from "./styles";

const Header = () => {
  return (
    <>
      <Style.DesktopHeader>
        <Style.LogoWidget>Auto completion input</Style.LogoWidget>
        <Style.TabWidget>
          <Style.Button left={6} right={0} active={true} onClick={() => {}}>
            All
          </Style.Button>
          <Style.Button left={0} right={6} active={false} onClick={() => {}}>
            Bookmarked
          </Style.Button>
        </Style.TabWidget>
      </Style.DesktopHeader>
    </>
  );
};

export default Header;
