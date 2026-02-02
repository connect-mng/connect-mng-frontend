import React from "react";
import BaseButton, { ButtonProps } from "./BaseButton";

export default function LargeButton(props: ButtonProps) {
  return <BaseButton {...props} size="large" />;
}
