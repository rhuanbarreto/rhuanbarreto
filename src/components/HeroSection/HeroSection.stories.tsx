import { HeroSection } from "./HeroSection";

export default { component: HeroSection, parameters: { layout: "fullscreen" } };

export const Default = {
  args: {
    title: "Test",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare, urna in faucibus imperdiet, purus ante tristique nibh, eget lobortis erat tellus in leo.",
    buttonProps: {
      children: "Learn More",
    },
  },
};
