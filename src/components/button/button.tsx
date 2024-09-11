import classNames from "classnames";
import { FC } from "react";
import "./styles/_loader.scss";

export type ButtonSizeType = "xlarge" | "large" | "medium" | "small" | "xsmall";
type PaletteType = "primary" | "secondary" | "tertiary";

type Props = {
  label: string;
  className?: string;
  size?: ButtonSizeType;
  isFullWidth?: boolean;
  palette?: PaletteType;
  onClick: () => void;
};

export const Button: FC<Props> = ({
  className,
  size = "medium",
  palette = "primary",
  label,
  isFullWidth,
  onClick,
}) => {
  const classes = classNames(className, "c-button", {
    "c-button--full-width": isFullWidth,
    [`c-button--${palette}`]: palette,
    [`c-button--${size}`]: size,
  });

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
};
