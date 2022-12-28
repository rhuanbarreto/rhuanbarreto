import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  /** Title to be displayed in the section */
  title?: string;
  /** Button Props */
  buttonProps?: HTMLAttributes<HTMLAnchorElement>;
  sectionProps?: HTMLAttributes<HTMLElement>;
}

export const HeroSection = ({
  title,
  children,
  buttonProps,
  sectionProps,
}: Props) => (
  <section
    className="h-screen flex items-center justify-center bg-gray-800 py-32 px-4"
    {...sectionProps}
  >
    <div className="max-w-3xl mx-auto text-center text-white">
      {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
      <p className="text-lg mb-8">{children}</p>
      {buttonProps && (
        <a
          {...buttonProps}
          className={`bg-transparent hover:bg-white hover:text-gray-800 text-white font-semibold py-2 px-4 border border-white rounded-full ${buttonProps.className}`}
        />
      )}
    </div>
  </section>
);
