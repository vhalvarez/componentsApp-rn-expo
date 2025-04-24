import { Children } from "react";
import { View, Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "semi-bold" | "link" | "bold";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemeText = ({ className, type, ...rest }: Props) => {
  return (
    <Text
      className={[
        'text-light-text dark:text-dark-text',
        type === "normal" ? "font-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "semi-bold" ? "font-semibold" : undefined,
        type === "bold" ? "font-bold" : undefined,
        type === "link" ? "font-normal underline" : undefined,
        className,
      ].join(" ")}
      {...rest}
    />
  );
};

export default ThemeText;
