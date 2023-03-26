import { Modal, Text, Button } from "@nextui-org/react";

const ConfirmModal = ({
  visible,
  closeHandler,
  headerText,
  bodyText,
  confirmText,
  cancelText,
}: any) => {
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text
          id="modal-title"
          size={18}
          css={{
            display: "flex",
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {headerText}
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text size={16}>{bodyText}</Text>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          {cancelText}
        </Button>
        <Button auto onPress={closeHandler}>
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
