import { cva } from "class-variance-authority";

export interface ButtonProps {
  onClick?: () => void;
  size?: "nav" | "small" | "medium" | "large" | "semi" | "circleSmall";
  title: string;
  icon?: [React.ReactNode, string];
  variant?: "primary" | "secondary" | "nobg" | "circleGray" | "circleGreen";
  type?: "normal" | "pill" | "circle";
  width?: "full";
}

export default function Button({
  onClick,
  variant,
  size,
  title,
  width,
  type,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={button({ variant, size, width, type })}
    >
      {icon && title && icon[1] === "left" ? (
        <div className="flex items-center justify-center gap-[6px] text-sm md:text-base 2xl:text-lg leading-normal">
          {icon[0]}
          {title}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-[6px] text-sm md:text-base 2xl:text-lg leading-normal">
          {title}
          {icon && icon[0]}
        </div>
      )}
    </button>
  );
}

const button = cva([], {
  variants: {
    variant: {
      primary: ["bg-green/60 text-gray/10"],
      secondary: ["bg-gray/10 border border-gray/20 text-white"],
      nobg: ["text-white"],
      circleGray: ["bg-gray/11 border border-gray/15"],
      circleGreen: ["bg-green/60 border border-gray/15"],
    },
    size: {
      nav: ["px-[14px] py-[6px]"],
      semi: [
        "px-[18px] py-2.5 text-sm md:text-base 2xl:text-lg leading-normal text-gray/10 font-normal",
      ],
      circleSmall: ["p-3"],
      small: ["px-6 py-[14px] text-sm md:text-base 2xl:text-lg"],
      medium: ["px-[18px]"],
      large: ["px-8 py-4"],
    },
    width: {
      full: ["w-full"],
    },
    type: {
      normal: ["rounded-[63px]"],
      pill: [""],
      circle: ["rounded-full"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
    type: "normal",
  },
});
