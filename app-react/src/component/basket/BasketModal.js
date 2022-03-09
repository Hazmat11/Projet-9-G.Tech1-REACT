import { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class BasketModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.setState({
            articles: JSON.parse(localStorage.getItem('article'))
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
                        <strong>BASKET</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        {
                            this.state.articles.length>0 && this.state.articles.map((u, i) => u.name)
                        }
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}

export default BasketModal;