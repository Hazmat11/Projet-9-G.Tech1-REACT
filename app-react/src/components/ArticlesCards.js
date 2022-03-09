import React, { Component } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { getArticles } from '../api/Articles.js';
import './ArticlesCards.css';

class ArticlesCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    async componentDidMount() {
        const articles = await getArticles()
        this.setState({
            articles: articles
        })
    }

    render() {
        console.log(this.state.articles);
        return <Row>
            {this.state.articles.data && this.state.articles.data.map((articles, key) => <Col md={{ span: 3 }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='ArticlesImages' src={"http://localhost:1337" + articles.attributes.visuals.data.attributes.url} />
                    <Card.Body>
                        <Card.Title>{articles.attributes.name}</Card.Title>
                        <Card.Text>{articles.attributes.description}</Card.Text>
                        <Card.Text>{articles.attributes.price + "€"}</Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card >
            </Col>
            )
            }
        </Row>
    }
}

export default ArticlesCards;