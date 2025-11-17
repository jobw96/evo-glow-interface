import { ReactNode } from "react";

interface NavLinkProps {
  onClick: () => void;
  children: ReactNode;
}

const NavLink = ({ onClick, children }: NavLinkProps) => {
  return (
    <button
      onClick={onClick}
      className="relative text-text-medium hover:text-navy transition-colors font-medium group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </button>
  );
};

export default NavLink;
