import { ReactNode, ComponentProps } from "react";
import Link from "next/link";

type MenuLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
};

const MenuLink = ({ href, children, ...rest }: MenuLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className="uppercase font-foreground font-semibold hover:text-accent transition-colors duration-150 ease-out"
        {...rest}
      >
        {children}
      </Link>
    </li>
  );
};

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-6">
        <MenuLink href="#about">About</MenuLink>
        <MenuLink href="#projects">Projects</MenuLink>
        <MenuLink href="#expertise">Expertise</MenuLink>
        <MenuLink href="#contact">Contact</MenuLink>
        <MenuLink
          href="/EliDizon_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </MenuLink>
      </ul>
    </nav>
  );
}
