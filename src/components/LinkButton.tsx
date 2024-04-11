import { cn } from "@/lib/utils";
import { Location } from "@/constants/Location";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  content?: string;
  href: string;
  icon?: JSX.Element;
  className?: string;
}

const LinkButton: React.FC<Props> = ({
  content,
  icon,
  className,
  href,
  ...rest
}) => {
  const location = localStorage.getItem("location");
  return (
    <a
      href={`${href}?location=${location ?? Location.ENGINEERING}`}
      className={cn(
        "font-primaryBold text-white text-7xl py-3 px-12 rounded-full border-4 bg-gradient-to-r shadow-2xl z-50 border-white from-button-primary to-button-secondary",
        "active:opacity-50",
        className
      )}
      {...rest}
    >
      {content}
      {icon}
    </a>
  );
};

export default LinkButton;
