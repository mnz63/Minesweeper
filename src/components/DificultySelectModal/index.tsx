import {
  ButtonText,
  CloseIcon,
  Heading,
  Icon,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal,
  Text,
} from "@gluestack-ui/themed";
import { params } from "../../commom/utils/params";
import { Button, TouchableOpacity } from "react-native";
import { useRef, useState } from "react";

type Props = {
  onSelectDificulty?: (dificulty: number) => void;
  isOpen?: boolean;
  onCloseModal?: () => void;
};

export default function DificultySelectModal({
  onSelectDificulty,
  isOpen,
  onCloseModal,
}: Props) {
  const ref = useRef(null);
  return (
    <Modal isOpen={isOpen} onClose={onCloseModal} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent bgColor="#1F1D47" gap={10} p={30}>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 60,
            borderRadius: 10,
            backgroundColor: "#319D76",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            onSelectDificulty(0.1);
            onCloseModal();
          }}
          activeOpacity={0.7}
        >
          <Text
            color={"#FFF"}
            fontFamily="Cherry"
            fontSize={24}
            lineHeight={30}
          >
            Fácil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 60,
            borderRadius: 10,
            backgroundColor: "#DAD100",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            onSelectDificulty(0.2);
            onCloseModal();
          }}
          activeOpacity={0.7}
        >
          <Text
            color={"#FFF"}
            fontFamily="Cherry"
            fontSize={24}
            lineHeight={30}
          >
            Médio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 60,
            borderRadius: 10,
            backgroundColor: "#9D0000",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            onSelectDificulty(0.3);
            onCloseModal();
          }}
          activeOpacity={0.7}
        >
          <Text
            color={"#FFF"}
            fontFamily="Cherry"
            fontSize={24}
            lineHeight={30}
          >
            Difícil
          </Text>
        </TouchableOpacity>
      </ModalContent>
    </Modal>
  );
}
