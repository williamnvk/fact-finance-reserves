import { Moon, Sun } from "lucide-react";
import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

export function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      size="sm"
      aria-label="Toggle color mode"
    >
      {colorMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </IconButton>
  );
}
