import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

const ToogleThemeComponent: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
};

export default ToogleThemeComponent;
