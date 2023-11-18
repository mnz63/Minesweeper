import {
  Button,
  ButtonText,
  Heading,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  View,
  Text,
} from "@gluestack-ui/themed";

type Props = {
  showModal: boolean;
  onCloseModal: () => void;
  onResetGame: () => void;
  type?: string;
};
export default function CustomModal({
  type,
  showModal,
  onCloseModal,
  onResetGame,
}: Props) {
  return (
    <Modal isOpen={showModal} onClose={onCloseModal}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">
            {type === "LOST" ? "Game Over!" : "Você venceu!"}
          </Heading>
        </ModalHeader>
        <ModalBody>
          <Text>
            {type === "LOST"
              ? "Você foi explodido por uma mina."
              : "Pressione continuar para um novo jogo."}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            action="primary"
            borderWidth="$0"
            onPress={onResetGame}
          >
            <ButtonText>Continuar</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
