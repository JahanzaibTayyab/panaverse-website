"use client";
import Lottie from "react-lottie";
import animationData from "@/assets/icons/loading.json";
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
} from "@chakra-ui/react";
const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { isOpen, onClose } = useDisclosure();
  return (
    <Modal isCentered isOpen onClose={onClose}>
      <ModalOverlay bg="transparent" />
      <ModalContent bg={"transparent"} boxShadow="none">
        <Lottie options={defaultOptions} height={200} width={200} />
      </ModalContent>
    </Modal>
  );
};
export default Loader;
