import { FC } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { StickyMenu } from "../../components/StickyMenu/StickyMenu";

const Home: FC = () => {
  return (
    <>
      <HeroSection title="Rhuan Samary Barreto" sectionProps={{ id: "main" }}>
        Hi! Wanna know more about me?
      </HeroSection>
      <StickyMenu
        links={[
          { children: "About Me" },
          { children: "Career" },
          { children: "Blogs" },
          { children: "Get in Touch" },
        ]}
      />
    </>
  );
};

export default Home;
