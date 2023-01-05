import { FC } from "react";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { StickyMenu } from "../../components/StickyMenu/StickyMenu";
import profile from "../../assets/profile.jpg";

export const Home: FC = () => (
  <>
    <HeroSection
      title="Rhuan Samary Barreto"
      sectionProps={{ id: "main" }}
      buttonProps={{ children: "Learn More", href: "#about" }}
    >
      Hi! Wanna know more about me?
    </HeroSection>
    <StickyMenu links={[{ children: "About Me", href: "#about" }]} />
    <AboutMe />
  </>
);
