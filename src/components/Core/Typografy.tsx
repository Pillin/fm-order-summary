import styled from "@emotion/styled";
import { Theme } from "../../theme";

export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4<{ margin?: string }>`
  margin: ${({ margin }) => margin || "inherit"};
`;
export const P = styled.p<{ margin?: string; theme?: Theme }>`
  margin: ${({ margin }) => margin || "inherit"};
  color: ${({ theme }) => theme.colors.neutral.second};
`;
