import React from "react";
import styled from "@emotion/styled";
import Image from "./Core/Image";
import { H4, P } from "./Core/Typografy";
import { ButtonUnderlineText } from "./Core/Buttons";
import { Theme } from "../theme";

const Container = styled.section<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  max-height: 78px;
  border-radius: 10px;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
  max-height: 78px;
  margin: 16px;
  background-color: ${({ theme }) => theme.colors.neutral.first};
`;

const PlanCard = (props: {
  name: string;
  value: string;
  onChange: () => void;
}) => {
  return (
    <Container>
      <Image src="assets/imgs/icon-music.svg" alt="music icon" />
      <H4 margin={"0px"}> {props.name} </H4>
      <P margin={"0px"}> {props.value} </P>
      <ButtonUnderlineText title="Change" onClick={props.onChange}>
        Change
      </ButtonUnderlineText>
    </Container>
  );
};

export default PlanCard;
