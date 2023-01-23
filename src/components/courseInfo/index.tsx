"use client";

import { Container, Flex, FlexProps, Box } from "@chakra-ui/react";
const CourseInfo = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" {...props} mt={90}>
      <Container flex="1" maxW={"full"}>
        <Box>Web 3.0 and Metaverse</Box>
      </Container>
    </Flex>
  );
};
export default CourseInfo;
