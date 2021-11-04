import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  height: 110px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.8);
`;
const FooterWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 70px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        Copyright © 2021 rdchen.
      </FooterWrapper>
    </FooterContainer>
  )
}
export default Footer;