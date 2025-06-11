import { defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
  title: {
    fontSize: { 
      base: "2xl", 
      sm: "3xl", 
      md: "4xl", 
      lg: "5xl" 
    },
    fontWeight: "bold",
    lineHeight: "shorter",
    letterSpacing: "tight"
  },
  subtitle: {
    fontSize: { 
      base: "sm", 
      sm: "md", 
      md: "lg" 
    },
    lineHeight: "tall",
    color: "whiteAlpha.800"
  }
});
