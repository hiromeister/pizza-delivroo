import React from "react";
import "./index.css"

class MenuPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPizza: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.addToCart = this.addToCart.bind(this);

    }

    componentDidMount() {
        this.props.onFetchApi();
    }


    handleClick(pizza) {
        this.setState({
            selectedPizza: [...this.state.selectedPizza, pizza]
        })
    }

    addToCart() {
        this.props.onAddToCart(1);

    }

    render() {
        return (
            <main>
                <div>
                    <p className="image"> img</p>
                    <ul>
                        {[...this.props.menuItems.values()].map(restaurant => (
                            restaurant.menu.map(pizza => (
                                <li onClick={() => this.handleClick(pizza)}> <a href="#">{pizza.name}___________________________________________{pizza.price}</a></li>
                            )
                            )
                        ))}
                    </ul>
                    <p> Pizzas séléctionné : {this.state.selectedPizza.length}</p>

                    <button onClick={() => this.addToCart()} > Confirmer </button>
                </div>
            </main >
        )
    }

};

export default MenuPage;

