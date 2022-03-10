import React, { Component } from 'react';
import { Card, Button, Row, Col, Toast } from 'react-bootstrap';
import { getArticles } from '../../api/Articles';
import { BsCartPlusFill } from 'react-icons/bs';
import './ArticlesCards.css';
import OpenM from './OpenModal';

class ArticlesCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            cart: []
        }
    }

    async componentDidMount() {
        const articles = await getArticles()
        this.setState({
            articles: articles
        })
    }

    addArticle = (article) => {
        this.setState({
            cart: [
                ...this.state.cart,
                article
            ]
        }, () => { localStorage.setItem('cart', JSON.stringify(this.state.cart)) })
        console.log(this.state.cart)

        return (<Toast>
            <Toast.Header>
                <img src="http://localhost:1337/uploads/Exotic_Taste_54b7357042.png?updated_at=2022-03-04T09:02:28.976Z" className="rounded me-2" alt="" />
                <strong className="me-auto">CART</strong>
            </Toast.Header>
            <Toast.Body>Your order has been update !</Toast.Body>
        </Toast>)
    }

    render() {
        return <div>
            <Row>
                {this.state.articles.data && this.state.articles.data.map((article, key) => <Col md={{ span: 3 }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className='ArticlesImages' src={"http://localhost:1337" + article.attributes.visuals.data.attributes.url} />
                        <Card.Body>
                            <Card.Title>{article.attributes.title}</Card.Title>
                            <Card.Text>{article.attributes.description}</Card.Text>
                            <Card.Text><strong>{article.attributes.price} €</strong></Card.Text>
                            <Button variant="primary" onClick={() => { this.addArticle(article) }}> <BsCartPlusFill /> </Button>
                            <OpenM article={article} />
                        </Card.Body>
                    </Card >
                </Col>
                )
                }
            </Row>
        </div>

    }
}

export default ArticlesCards;