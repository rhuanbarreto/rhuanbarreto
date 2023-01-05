import { FC } from "react";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { MainSection } from "../../components/MainSection/MainSection";
import { StickyMenu } from "../../components/StickyMenu/StickyMenu";

export const Home: FC = () => (
  <>
    <MainSection />
    <StickyMenu links={[{ children: "About Me", href: "#about" }]} />
    <AboutMe />
  </>
);
