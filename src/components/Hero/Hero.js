import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello there! <br />
        My name is Johnson Ojo. I'm a full-stack software engineer currently
        based in Lagos, Nigeria and I have about 3 years of experience.
      </SectionText>
      <Button
        onClick={() => {
          window.location = "#projects";
        }}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
