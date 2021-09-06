import styled from "@emotion/styled";
import { Theme } from "../../theme";

export const ButtonUnderlineText = styled.button<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.primary.second};
  background-color: transparent;
  border-color: transparent;
  padding: 8px;
`;
export const ButtonBlue = styled.button<{ theme?: Theme }>`
  max-width: 320px;
  width: 100%;
  border-radius: 5px;
  padding: 8px;
  color: white;
  border-color: ${({ theme }) => theme.colors.primary.second};
  background-color: ${({ theme }) => theme.colors.primary.second};
`;
export const ButtonWhite = styled.button<{ theme?: Theme }>`
  max-width: 320px;
  width: 100%;
  border-radius: 5px;
  padding: 16px;
  background-color: transparent;
  border-color: transparent;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral.second};
`;
