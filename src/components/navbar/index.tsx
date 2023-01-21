"use client";

import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { NavItem } from "@/types/navbar";
import { NAV_ITEMS } from "@/utils";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      bg="bg-surface"
      boxShadow={useColorModeValue("md", "md-dark")}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"70px"}
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
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("customBlack.900", "gray.800");
  const linkHoverColor = useColorModeValue("blue.600", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={NextLink}
                p={2}
                href={navItem.href ?? "#"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={2}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      as={NextLink}
      href={href}
      role={"group"}
      display={"block"}
      p={3}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            color="customBlack.900"
            _groupHover={{ color: "blue.400" }}
            fontWeight={500}
            textTransform="capitalize"
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
          color: "blue.500",
        }}
      >
        <Text
          fontFamily={"heading"}
          fontWeight="bold"
          color={useColorModeValue("customBlack.900", "gray.200")}
          _hover={{
            color: "blue.500",
          }}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                as={NextLink}
                key={child.label}
                py={2}
                href={child.href}
                _hover={{
                  textDecoration: "none",
                  color: "blue.500",
                }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
