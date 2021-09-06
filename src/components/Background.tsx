import React from "react";
import styled from "@emotion/styled";
import { Theme } from "../theme";

const IMG = styled.img`
  z-index: 1;
  position: absolute;
  height: 50%;
  min-width: 100%;
  object-fit: cover;
  top: 0px;
`;

const Container = styled.section<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral.second};
`;

const Background = (props: {
  children: React.ReactNode;
  images: {
    mobile: {
      src: string;
    };
    desktop: {
      src: string;
    };
  };
}) => {
  return (
    <Container>
      <IMG src={props.images.desktop.src} />
      {props.children}
    </Container>
  );
};

export default Background;
