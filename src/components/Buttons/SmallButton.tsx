import React from "react";
import BaseButton, { ButtonProps } from "./BaseButton";

export default function SmallButton(props: ButtonProps) {
  return <BaseButton {...props} size="small" />;
}
