import React from "react";
import styled from "styled-components";

export type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = "", children }) => {
  return (
    <StyledHeader className={className}>
      <h1>{children}</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: tomato;
`;
