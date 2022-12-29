import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  links?: Array<{ component: ReactNode } | HTMLAttributes<HTMLAnchorElement>>;
}

export const StickyMenu: FC<Props> = ({ links = [], children }: Props) => {
  return (
    <nav className="bg-gray-800 sticky w-full z-10 top-0 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          {links.map((link, i) => {
            if ("component" in link) return link.component;
            return (
              <a
                key={i}
                {...link}
                className={`text-white text-base no-underline hover:text-gray-100 hover:no-underline ml-4 first:ml-0 ${
                  link.className ?? ""
                }`}
              />
            );
          })}
          {children}
        </div>
      </div>
    </nav>
  );
};
