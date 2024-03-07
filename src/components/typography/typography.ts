"use client";

import { styled } from "@/styled";

import {
  decorationVariant,
  familyVariant,
  sizeVariant,
  textAlignVariant,
  textTransformVariant,
  weightVariant,
  whiteSpaceVariant,
} from "./variants";

const Typography = styled("div", {
  color: "white",
  // color: "red",
  defaultVariants: {
    weight: "300",
  },
  fontFamily: "Mabry Pro",
  // color: "red",
  variants: {
    family: familyVariant,

    neon: {
      true: {
        textShadow: ` 0px 0px 20px #ed9960;`,
        color: "white",
      },
    },
    decoration: decorationVariant,
    size: sizeVariant,
    textAlign: textAlignVariant,
    weight: weightVariant,
    whiteSpace: whiteSpaceVariant,
    textTransform: textTransformVariant,
    selectable: {
      true: {
        userSelect: "all",
      },
    },
  },
});

export default Typography;
