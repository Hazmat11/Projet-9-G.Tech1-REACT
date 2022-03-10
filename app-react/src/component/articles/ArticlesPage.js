import { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsCartPlusFill } from "react-icons/bs";

class ArticlesModal extends Component {
    constructor(props) {
        super(props);
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
                        {this.props.article.attributes.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={"http://localhost:1337" + this.props.article.attributes.visuals.data.attributes.url} />
                    <p>
                        {this.props.article.attributes.descriptionLong}
                    </p>
                    <strong>{this.props.article.attributes.price} €</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => { localStorage.setItem('article', JSON.stringify(this.state.articles)) }}> <BsCartPlusFill /> </Button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}

export default ArticlesModal;