export const theme = {
  colors: {
    primary: {
      first: "hsl(225, 100%, 94%)",
      second: "hsl(245, 75%, 52%)"
    },
    neutral: {
      first: "hsl(225, 100%, 98%)",
      second: "hsl(224, 23%, 55%)",
      third: "hsl(223, 47%, 23%)"
    },
    white: "hsl(0, 0%, 100%)",
    black: ""
  },
  fontFamily: "Space Mono",
  fontSize: {
    input: "16px"
  },
  responsible: {
    mobile: "375px",
    desktop: "1440px"
  }
};

export type Theme = typeof theme;
