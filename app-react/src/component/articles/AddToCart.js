export function addArticle = async(article) =>{
    this.setState({
        cart : [
            ...this.statecart,
            article
        ]
    },()=>{
        localStorage.setItem('cart', JSON.stringify(this.state.cart))
    });
}