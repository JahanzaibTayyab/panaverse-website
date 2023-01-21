"use client";
import "@fontsource/nunito";
import "@fontsource/raleway";
import "@fontsource/open-sans";

import type { ReactNode } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@/assets/theme";

type Props = {
  children: ReactNode;
};

const chakraWrapper = ({ children }: Props) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};
export default chakraWrapper;
