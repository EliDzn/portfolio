import Text from "./typography";

const SOCIAL_PROFILES = [
  { name: "LinkedIn", href: "linkedin.com/in/eli-dizon" },
  { name: "GitHub", href: "https://github.com/EliDzn" },
  { name: "Email", href: "mailto:elialeandro.dizon@gmail.com" }
];

export default function SocialLinks() {
  return (
    <div
      aria-label="Social profiles"
      className="my-1 flex flex-row items-center"
    >
      {SOCIAL_PROFILES.map((profile) => (
        <a
          key={profile.name}
          href={profile.href}
          target={profile.name === "Email" ? undefined : "_blank"}
          rel={profile.name === "Email" ? undefined : "noopener noreferrer"}
          className="group flex items-center uppercase after:mx-3 after:content-['•'] last:after:hidden text-foreground/50"
        >
          <Text
            variant="body-md"
            className="text-subtle-foreground transition-all duration-300 ease-out group-hover:text-background group-active:text-accent-pressed bg-linear-to-r from-foreground from-50% to-transparent to-50% bg-size-[200%_100%] bg-position-[100%_0%] group-hover:bg-position-[0%_0%]"
          >
            {profile.name}
          </Text>
        </a>
      ))}
    </div>
  );
}
