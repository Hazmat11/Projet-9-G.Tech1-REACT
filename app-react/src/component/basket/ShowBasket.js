//import { Component } from "react";
//import { Card } from "react-bootstrap";
//
//class ShowCart extends Component {
//    constructor(props) {
//        super(props)
//        this.state = {
//            cart: []
//        }
//    }
//
//    componentDidMount() {
//        this.setState({
//            cart: [
//                ...this.state.cart,
//                localStorage.getItem('article')
//            ]
//        })
//    }
//
//    render() {
//        return (
//            {
//                this:state.cart.data && this.state.cart.data.map((cart, key) => <Card>
//                    <Card.Header>{this.state.cart.article.attribute.title}</Card.Header>
//                    <Card.Body>
//                        <blockquote className="blockquote mb-0">
//                            <p>
//                                {this.state.cart.article.attribute.description}
//                            </p>
//                            <footer className="blockquote-footer">
//                                <p>
//                                    <strong>{this.state.cart.article.price}</strong> €
//                                </p>
//                            </footer>
//                        </blockquote>
//                    </Card.Body>
//                </Card>
//                )
//            }
//        );
//    }
//}
//
//export default ShowCart;