import styled from "@emotion/styled";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 16px;
  align-items: center;
`;

export const CardDescription = styled.section`
  padding: 24px;
  display: flex;
  padding: 16px 16px 16px 16px;
  flex-direction: column;
  width: 390px;
  align-items: center;

  @media (max-width: 679px) {
    width: 100%;
    padding: 16px 16px 16px 16px;
  }
`;
