import React, { ReactNode } from "react";
import type { NextPageContext } from "next";
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";

interface Props {
  cookies: string | undefined;
  children: ReactNode;
}

function Chakra({ cookies, children }: Props) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }: NextPageContext) {
  return {
    props: {
      cookies: req?.headers.cookie ?? "",
    },
  };
}

export default Chakra;
