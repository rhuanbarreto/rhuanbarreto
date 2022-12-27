import { StickyMenu } from "./StickyMenu";

export default { component: StickyMenu, parameters: { layout: "fullscreen" } };

export const Default = {
  args: {
    links: [
      { children: "Test Link", href: "https://google.com" },
      { children: "Test Link", href: "https://google.com" },
      {
        component: (
          <span className="text-white text-base no-underline ml-4">
            Test Component
          </span>
        ),
      },
    ],
    children: (
      <span className="text-white text-base no-underline ml-4">
        This is the children
      </span>
    ),
  },
};
