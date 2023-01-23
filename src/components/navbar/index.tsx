"use client";

import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Link,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      as="nav"
      role="navigation"
      bg="bg-surface"
      boxShadow={useColorModeValue("md", "md-dark")}
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
      width="full"
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"90px"}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
          <Link as={NextLink} href="/">
            <Image
              src="/panaverse.png"
              alt="panaverse-logo"
              width={100}
              height={50}
            />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            alignItems="center"
          >
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link
            as={NextLink}
            isExternal
            href={"https://github.com/panaverse"}
            margin="auto"
            display={{ base: "none", md: "inline-flex" }}
          >
            <Button
              fontWeight={400}
              variant={"link"}
              color="black"
              rightIcon={<ExternalLinkIcon />}
            >
              Github
            </Button>
          </Link>
          <Link
            as={NextLink}
            isExternal
            href={"https://portal.piaic.org/signup"}
            margin="auto"
            _hover={{
              outline: "none",
            }}
          >
            <Button
              colorScheme="blue"
              padding="0px 40px"
              height={50}
              _hover={{
                bg: "red.500",
              }}
              display={{ base: "none", md: "inline-flex" }}
            >
              Apply
            </Button>
          </Link>
        </Stack>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          justify="end"
        >
          <IconButton
            onClick={onToggle}
            bg="transparent"
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default NavBar;
