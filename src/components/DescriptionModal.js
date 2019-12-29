import React from 'react';
// import { Button, Modal } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';




class TextModal extends React.Component {
    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       modal: false
    //     };
    //     this.toggle = this.toggle.bind(this);
    //   }
    //    toggle() {

    //     this.setState(prevState => ({
    //       modal: !prevState.modal
    //     }));

    //      this.props.clicker();
    //     console.log("clicker has been called")

    //     console.log(this.state.modal)

    //     console.log(this.props.qualityText);
    
    //   }


      
    render() {
        // console.log(this.state.modal);
        return (
            <div className="center-buttons guest-login-button-modal">
                <Button className="btn-sm btn-primary" 
                
                // onClick={this.props.clicker}
                onClick={this.props.clicker}
                >
                    {this.props.qualityName}
                </Button>

                <Modal isOpen={this.props.modal} toggle={this.props.modal}>

                    <ModalHeader toggle={this.props.modal}>{this.props.qualityName}</ModalHeader>

                    <ModalBody>
                        {this.props.qualityText}
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}
export default TextModal;