import { defineRecipe } from "@chakra-ui/react"

export const badgeRecipe = defineRecipe({
  className: "chakra-badge",
  base: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "full",
    gap: "1",
    fontWeight: "medium",
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
    userSelect: "none",
  },
  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
      },
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
      },
      outline: {
        color: "colorPalette.fg",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "white",
      },
      surface: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "colorPalette.muted",
      },
      plain: {
        color: "colorPalette.fg",
      },
    },
    size: {
      xs: {
        fontSize: "xs",
        px: "2",
        minH: "6",
        fontWeight: "medium",
      },
      sm: {
        textStyle: "xs",
        py: 1.5,
        px: 4,
        minH: "5",
      },
      md: {
        textStyle: "sm",
        px: 6,
        minH: "6",
      },
      lg: {
        textStyle: "sm",
        px: "2.5",
        minH: "7",
      },
    },
  },
  defaultVariants: {
    variant: "subtle",
    size: "sm",
  },
})
