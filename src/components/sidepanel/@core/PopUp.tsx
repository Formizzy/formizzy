import React from 'react'
// import { extendTheme } from "nextui";
import { Modal,Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
const popup = () => {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
  return (
    <div>
    <Button className='m-auto' auto onPress={handler}>
      Create New Form
    </Button>
    <Modal
      closeButton
      aria-labelledby="modal-title" 
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header css={{justifyContent:"start"}}>
        <Text className='font-semibold' size={18}>
          Create a Form
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>
            Form Name
        </Text>
      <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Contact us Form"
            contentLeft=""
          />    <Text>
            Return Link
        </Text>
      <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Return to this URL on successful submission"
            contentLeft=""
          />
       
       
      </Modal.Body>
      <Modal.Footer>
        <Button auto css={{color:"black",backgroundColor: "white"}} className='bg-white text-black !important' onPress={closeHandler}>
          Close
        </Button>
        <Button auto css={{color:"white",backgroundColor: "#FF8F6B"}} onPress={closeHandler}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}

export default popup
