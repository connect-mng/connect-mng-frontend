import React from "react";
import BaseButton, { ButtonProps } from "./BaseButton";

export default function MediumButton(props: ButtonProps) {
  return <BaseButton {...props} size="medium" />;
}
