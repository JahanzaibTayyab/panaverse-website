"use client";

import { Container, Flex, FlexProps, Box } from "@chakra-ui/react";
import Footer from "./footer";

const Home = (props: FlexProps) => {
  return (
    <>
      <Flex as="main" role="main" direction="column" flex="1" {...props}>
        <Container flex="1" maxW={"full"}>
          <Box>Main</Box>
        </Container>
      </Flex>
      <Footer />
    </>
  );
};
export default Home;
