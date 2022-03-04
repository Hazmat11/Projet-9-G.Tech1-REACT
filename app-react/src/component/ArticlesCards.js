import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { getArticles } from '../api/Articles';
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
        return <div>
        {this.state.articles.data && this.state.articles.data.map((article,key)=><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='ArticlesImages' src={"http://localhost:1337"+article.attributes.visuals.data.attributes.url} />
                <Card.Body>
                    <Card.Title>{article.attributes.name}</Card.Title>
                    <Card.Text>{article.attributes.description}</Card.Text>
                    <Card.Text><strong>{article.attributes.price} €</strong></Card.Text>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
            </Card >
            )
        }
        </div>
        
    }
}

export default ArticlesCards;