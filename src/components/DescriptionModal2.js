import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TextModal2 = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
      console.log('before setmodal call',modal)
      setModal(!modal);
      console.log('after setmodal call',modal)
      props.clicker();
      
    };

    // const myfunc = async () => {
    //     console.log("Entering myfunc()...");
    //     console.log("awaiting toggle()...");
    //     await toggle();
    //     console.log("running clicker()!");
    //     // props.clicker()
    // }

    // =============================================
    // These things are getting passed down...
    // =============================================
    //   <TextModal2
    //   qualityText = {qualityText}
    //   qualityName = {QualityKey[props.value.Key]}
    //   clicker = {(event) => this.getQuality(event, props.value.Key)}
    //   modal = {this.state.modal}
    // />
    // =============================================



  return (
    <div>  
        <Button 
        color="info" 
        className="btn-sm btn-primary" 
        onClick={toggle}>
            {props.qualityName} {props.qualityNumber}
        </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.qualityName} {props.qualityNumber}</ModalHeader>
        <ModalBody>
          {props.qualityText}
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>{props.qualityName}</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TextModal2;