import React from "react";
import { Card, CardDescription } from "./components/Card";
import PlanCard from "./components/PlanCard";
import { ThemeProvider } from "@emotion/react";
import { H2, P } from "./components/Core/Typografy";
import { ButtonWhite, ButtonBlue } from "./components/Core/Buttons";
import Image from "./components/Core/Image";
import Background from "./components/Background";
import { theme } from "./theme";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Background
          images={{
            desktop: {
              src: "/assets/imgs/pattern-background-desktop.svg"
            },
            mobile: {
              src: "/assets/imgs/pattern-background-mobile.svg"
            }
          }}
        >
          <Card>
            <Image
              style={{
                borderRadius: "20px 20px 0px 0px",
                width: "100%",
                minHeight: "100px"
              }}
              src="/assets/imgs/illustration-hero.svg"
              alt="girl is smiling"
            />
            <CardDescription>
              <H2>Order Summary</H2>
              <P>
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like
              </P>
              <PlanCard
                name="Annual Plan"
                value="$59.99/year"
                onChange={() => {
                  return;
                }}
              />
              <ButtonBlue
                onClick={() => {
                  return;
                }}
              >
                Proceed to Payment
              </ButtonBlue>
              <ButtonWhite
                onClick={() => {
                  return;
                }}
              >
                Cancel Order
              </ButtonWhite>
            </CardDescription>
          </Card>
        </Background>
      </div>
    </ThemeProvider>
  );
}
