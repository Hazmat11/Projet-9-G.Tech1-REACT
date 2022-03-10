import { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import { newOrder } from "../../api/Order";
import { ShowCart } from './ShowBasket.js'

class BasketModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.setState({
            articles: JSON.parse(localStorage.getItem('cart'))
        })
    }

    render() {
        return <div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.props.show}
                onHide={this.props.onHide}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <strong>ORDER</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Current Order</h4>
                    <ShowCart />
                </Modal.Body>
                <Modal.Footer>
                    <h4><strong>Total:</strong></h4>
                    <Button onClick={newOrder}> <BsCheckCircle /> </Button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}

export default BasketModal;