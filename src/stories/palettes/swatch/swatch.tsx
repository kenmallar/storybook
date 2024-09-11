import { FC, useEffect, useRef, useState } from "react";
import "./styles/_loader.scss";

interface Props {
  name?: string;
  shades: (string | number)[];
}

export const Swatch: FC<Props> = ({ name, shades }) => {
  return (
    <div className="c-swatch">
      <h2 className="c-swatch__name">{name}</h2>
      {shades.map((color, idx) => {
        return <Color key={idx} name={name} color={color} />;
      })}
    </div>
  );
};

const Color: FC<{ name?: string; color: string | number }> = ({
  name,
  color,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHex] = useState("");
  const colorName = `--color-${name ? `${name}-` : ""}${color}`;

  useEffect(() => {
    if (ref.current && document.defaultView) {
      setColorValue(
        document.defaultView.getComputedStyle(ref.current).backgroundColor
      );
    }
  }, [ref]);

  useEffect(() => {
    setHex(rgbToHex(colorValue));
  }, [colorValue]);

  return (
    <div className="c-color">
      <div
        ref={ref}
        className="c-color__sample"
        style={{ backgroundColor: `var(${colorName})` }}
      />
      <div className="c-color__info">
        <div className="c-color__name">{colorName}</div>
        <p className="c-color__value">{`${colorValue} • ${hexValue}`}</p>
      </div>
    </div>
  );
};

const rgbToHex = (rbgValue: string): string =>
  `#${rbgValue
    .split("rgb(")
    .join("")
    .split(")")
    .join("")
    .split(",")
    .map((value) => {
      const rawValue = (+value).toString(16);
      return rawValue.length < 2 ? `0${rawValue}` : rawValue;
    })
    .join("")
    .toLocaleUpperCase()}`;
