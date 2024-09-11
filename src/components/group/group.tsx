import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import "./styles/_loader.scss";
import { Spacing } from "../../models/spacing";

export type GroupPosition =
  | "left"
  | "center"
  | "right"
  | "apart"
  | "space-around";
export type GroupAlign = "start" | "center" | "end";

interface Props {
  className?: string;
  align?: GroupAlign;
  fitContent?: boolean;
  grow?: boolean;
  position?: GroupPosition;
  spacing?: Spacing;
  wrap?: boolean;
  onClick?: () => void;
}

export const Group: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  align,
  fitContent,
  grow,
  position = "left",
  spacing = "1",
  wrap,
  onClick,
}) => {
  const classes = classNames(
    "c-group",
    {
      [`c-group--align-${align}`]: align,
      "c-group--fit-content": fitContent,
      [`c-group--gap-${spacing}`]: spacing,
      "c-group--grow": grow,
      [`c-group--${position}`]: position,
      "c-group--wrap": wrap,
    },
    className
  );

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};
