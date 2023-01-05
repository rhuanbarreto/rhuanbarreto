import { FC } from "react";
import { HeroSection } from "../HeroSection/HeroSection";

export const MainSection: FC = () => (
  <HeroSection
    title="Rhuan Samary Barreto"
    sectionProps={{
      id: "main",
      style: {
        backgroundImage: "url('https://rhuan.com.br/images/bg.jpg')",
        minHeight: 500,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    }}
    buttonProps={{ children: "Learn More", href: "#about" }}
  >
    Hi! Wanna know more about me?
  </HeroSection>
);
