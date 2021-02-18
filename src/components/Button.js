import React from "react";
import styled from "styled-components";

const Button = ({ clickHandler, children }) => {
  return (
    <MainButton onClick={clickHandler}>
      <span>{children}</span>
    </MainButton>
  );
};

const MainButton = styled.button`
  width: 170px;
  height: 65px;
  background: var(--clr-primary-1);
  box-shadow: var(--light-shadow);
  border-radius: 2px;
  border: 2px solid;
  transition: var(--transition);
  border-image: linear-gradient(#360154, #d442d5) 30;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 36px #c80de0;
    transition: var(--transition);
  }
  span {
    text-align: center;
    font-family: var(--ff-primary);
    left: 56px;
    font-size: 20px;
    margin: 0 auto;
    transition: var(--transition);
  }
`;
export default Button;
