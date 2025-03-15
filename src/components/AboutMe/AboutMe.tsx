import { FC } from "react";
import { HeroSection } from "../HeroSection/HeroSection";
import profile from "../../assets/profile.jpg";

export const AboutMe: FC = () => (
  <HeroSection
    title="About Me"
    sectionProps={{ id: "about" }}
    buttonProps={{ children: "Know More About my Career", href: "#career" }}
  >
    <div className="grid grid-cols-2 gap-8 items-center">
      <div>
        <img src={profile} />
      </div>
      <div>
        <p className="mb-4">
          I&#39;m an engineer that loves to solve problems using technology.
        </p>
        <p className="mb-4">
          Programming is the tool I use the most for solving them. But my life
          is/was not only about programming. I started programming very early,
          since I was 10 years old.
        </p>
      </div>
    </div>
  </HeroSection>
);
