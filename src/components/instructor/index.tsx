"use client";

import { Container, Flex, FlexProps, Box } from "@chakra-ui/react";
const Instructor = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" {...props}>
      <Container flex="1" maxW={"full"}>
        <Box>Instructor</Box>
      </Container>
    </Flex>
  );
};
export default Instructor;
