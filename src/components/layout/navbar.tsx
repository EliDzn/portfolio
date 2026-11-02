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

export default function Navbar({ isProjectPage }: { isProjectPage: boolean }) {
  const transitionTypes = isProjectPage ? ["project-back"] : undefined;

  return (
    <nav>
      <ul className="flex flex-row gap-6">
        <MenuLink href="/#projects" transitionTypes={transitionTypes}>
          Projects
        </MenuLink>
        <MenuLink href="/#about" transitionTypes={transitionTypes}>
          About
        </MenuLink>
        <MenuLink href="/#expertise" transitionTypes={transitionTypes}>
          Expertise
        </MenuLink>
        <MenuLink href="/#contact" transitionTypes={transitionTypes}>
          Contact
        </MenuLink>
        <li>
          <a
            href="/Eli_Alejandro_Dizon_Resume.pdf"
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
