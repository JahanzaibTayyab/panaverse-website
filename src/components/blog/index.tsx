"use client";

import { Container, Flex, FlexProps, Box } from "@chakra-ui/react";
const Blogs = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" {...props} mt={90}>
      <Container flex="1" maxW={"full"}>
        <Box>Blog page</Box>
      </Container>
    </Flex>
  );
};
export default Blogs;
