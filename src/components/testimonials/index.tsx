"use client";

import { Container, Flex, FlexProps, Box } from "@chakra-ui/react";
const Testimonials = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" {...props}>
      <Container flex="1" maxW={"full"}>
        <Box>Testimonials</Box>
      </Container>
    </Flex>
  );
};
export default Testimonials;
