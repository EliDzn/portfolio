import { ReactNode, ComponentProps } from "react";
import Link from "next/link";
import { cn } from "../ui/typography";

type MenuLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
};

const MenuLink = ({ href, children, ...rest }: MenuLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "uppercase font-semibold text-foreground transition-colors duration-150 ease-out hover:text-accent"
        )}
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
        <MenuLink href="/#projects">Projects</MenuLink>
        <MenuLink href="/#about">About</MenuLink>
        <MenuLink href="/#expertise">Expertise</MenuLink>
        <MenuLink href="/#contact">Contact</MenuLink>
        <li>
          <a
            href="/Eli_Aleandro_Dizon_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase font-semibold text-foreground transition-colors duration-150 ease-out hover:text-accent"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
