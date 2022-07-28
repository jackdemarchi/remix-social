import type { ComponentPropsWithoutRef } from "react";
import React from "react";

export type Props = ComponentPropsWithoutRef<any> & {
  as?: React.ElementType<any>;
};
