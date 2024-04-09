import * as HeroIcon from "@heroicons/react/20/solid";
import { ComponentProps } from "react";

type Props = {
  name: keyof typeof HeroIcon;
} & ComponentProps<typeof HeroIcon.AcademicCapIcon>;

const Icon = ({ name, ...props }: Props) => {
  const IconComponent = HeroIcon[name];
  return <IconComponent {...props} />;
};

export default Icon;
