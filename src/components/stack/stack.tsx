import classNames from "classnames";
import { PropsWithChildren, forwardRef } from "react";
import "./styles/_loader.scss";
import { Spacing } from "../../models/spacing";

export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify =
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around";

interface Props {
  className?: string;
  align?: StackAlign;
  fitContent?: boolean;
  justify?: StackJustify;
  spacing?: Spacing;
  wrap?: boolean;
  onClick?: () => void;
}

export const Stack = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (
    {
      className,
      children,
      align = "start",
      fitContent,
      justify = "start",
      spacing = "1",
      wrap,
      onClick,
    },
    ref
  ) => {
    const classes = classNames(
      "c-stack",
      {
        "c-stack--fit-content": fitContent,
        "c-stack--wrap": wrap,
        [`c-stack--align-${align}`]: align,
        [`c-stack--gap-${spacing}`]: spacing,
        [`c-stack--justify-${justify}`]: justify,
      },
      className
    );

    return (
      <div ref={ref} className={classes} onClick={onClick}>
        {children}
      </div>
    );
  }
);

Stack.displayName = "Stack";
