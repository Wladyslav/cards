import React from "react";
import styled from "styled-components";

const Button = ({ children, func }) => {
  return (
    <MainButton onClick={func}>
      <span>{children}</span>
    </MainButton>
  );
};

const MainButton = styled.button`
  width: 171px;
  height: 65px;
  background: #2c0055;
  box-shadow: 0px 0px 16px #c80de0;
  border-radius: 2px;
  z-index: 3;
  border: 2px solid;
  transition: all 0.3s ease-in-out;
  border-image: linear-gradient(#360154, #d442d5) 30;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 36px #c80de0;
    transition: all 0.3s ease-in-out;
  }
  span {
    text-align: center;
    font-family: "Sacramento", cursive;
    left: 56px;
    font-size: 20px;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
    background: -webkit-linear-gradient(#ffdc2a, #fb2182);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export default Button;
