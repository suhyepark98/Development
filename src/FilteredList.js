import React from 'react';
import DisplayList from './DisplayList.js';
import { Nav, Navbar, Dropdown, DropdownButton } from "react-bootstrap";

/* 
 * Class that returns the content portion of the website, including the filters and sorting options, products, and the cart.
 * Specifically, it performs filtering and sorting to only display corresponding products.
 * Aggregator functions are implemented in this class as well.
 */
class FilteredList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // default
            gender: "All",
            type: "All",
            sort: "Ascending",
            cart: {}
        };
    }

    render() {
        return (
            <div className="content">
                <div className="cards-container">
                    <div className="filters">
                        {/* Navbar for first filter: Gender */}
                        <Navbar bg="white" expand="lg">
                            <b>Gender:</b>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav defaultActiveKey="All">
                                <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterGender}>All</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="Men" onSelect={this.onSelectFilterGender}>Men</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="Women" onSelect={this.onSelectFilterGender}>Women</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="Kids" onSelect={this.onSelectFilterGender}>Kids</Nav.Link></Nav.Item>
                            </Nav>
                        </Navbar>
                        {/* Navbar for second filter: Type */}
                        <Navbar bg="white" expand="lg">
                            <b>Type:</b>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav defaultActiveKey="All">
                                <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>All</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="Sweatshirts" onSelect={this.onSelectFilterType}>Sweatshirts</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="Jackets" onSelect={this.onSelectFilterType}>Jackets</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="T-shirts" onSelect={this.onSelectFilterType}>T-shirts</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="Pants" onSelect={this.onSelectFilterType}>Pants</Nav.Link></Nav.Item>
                            </Nav>
                        </Navbar>
                    </div>
                    <br />
                    {/* Dropdown for sorting based on price. */}
                    <div className="dropdown">
                        <DropdownButton id="dropdown-basic-button" title="Sort by Price">
                            <Dropdown.Item eventKey="Ascending" onSelect={this.onSelectSort}>Lowest to Highest</Dropdown.Item>
                            <Dropdown.Item eventKey="Descending" onSelect={this.onSelectSort}>Highest to Lowest</Dropdown.Item>
                        </DropdownButton>
                        <br />
                    </div>
                    {/* Calls DisplayList class, passing in the list of the matching products. isInCart is false because we're displaying product options. */}
                    <div classname="display-products">
                        <div classname="product-list">
                            <DisplayList list={this.getDisplayList()} isInCart={false} addToCart={this.addToCart} removeFromCart={this.removeFromCart} addQuantity={this.addQuantity} subtractQuantity={this.subtractQuantity} />
                        </div>
                    </div>
                </div >

                {/* Cart */}
                <div className="cart-container">
                    <div className="cart">
                        <h3><b>My Cart</b></h3>
                        <div className="total-price">
                            <h5><b>Total Price: ${this.getTotalPrice().toFixed(2)}</b></h5>
                        </div>
                        <br />
                        {/* Calls DisplayList class, passing in the cart with added items. isInCart is true because we're displaying items in cart. */}
                        <DisplayList list={this.state.cart} isInCart={true} addToCart={this.addToCart} removeFromCart={this.removeFromCart} addQuantity={this.addQuantity} subtractQuantity={this.subtractQuantity} />
                    </div>
                </div>
            </div >
        );
    }

    // change gender state (if different gender navbar button is clicked)
    onSelectFilterGender = event => {
        this.setState({
            gender: event
        });
    }

    // filter condition for gender for each item
    matchesFilterGender = item => {
        // All items shown when "All" (default)
        if (this.state.gender === "All") {
            return true
        } else if (this.state.gender === item.gender) {
            return true
        } else {
            return false
        }
    }

    // change type state (if different type navbar button is clicked)
    onSelectFilterType = event => {
        this.setState({
            type: event
        });
    }

    // filter condition for type for each item
    matchesFilterType = item => {
        // All items shown when "All" (default)
        if (this.state.type === "All") {
            return true
        } else if (this.state.type === item.type) {
            return true
        } else {
            return false
        }
    }

    // change sort state (if different sort dropdown button is clicked)
    onSelectSort = event => {
        this.setState({
            sort: event
        })
    }

    // filtering and sorting on this.props.list
    getDisplayList = () => {
        return this.props.list.filter(this.matchesFilterGender).filter(this.matchesFilterType).sort((a, b) => this.state.sort === "Descending" ? b.price - a.price : a.price - b.price);
    }

    // Once "add to cart" is clicked for an item, newly add it to cart if the item does not already exist, or increment its quantity if it already exists
    addToCart = item => {
        let cart = this.state.cart;

        if (item.id in cart) {
            cart[item.id].count += 1;
        }
        else {
            cart[item.id] = {
                'id': item.id,
                'name': item.name,
                'gender': item.gender,
                'type': item.type,
                'price': item.price,
                'img': item.img,
                'count': 1
            };
        }

        this.setState({ cart });
    }

    // Once "remove from cart" is clicked for an item from cart, remove it from the cart
    removeFromCart = item => {
        let cart = this.state.cart;
        delete cart[item.id];

        this.setState({ cart });
    }

    // Once "add quantity (up arrow)" is clicked for an item in cart, increment its quantity
    addQuantity = item => {
        let cart = this.state.cart;
        cart[item.id].count += 1;

        this.setState({ cart });
    }

    // Once "subtract quantity (down arrow)" is clicked for an item in cart, decrement its quantity. Note that it cannot go below 1.
    subtractQuantity = item => {
        let cart = this.state.cart;

        if (cart[item.id].count === 1) {
            return;
        }
        else {
            cart[item.id].count -= 1;
        }

        this.setState({ cart });
    }

    // Calculates the total price in cart
    getTotalPrice() {
        let totalPrice = 0
        for (var key in this.state.cart) {
            totalPrice += this.state.cart[key].price * this.state.cart[key].count;
        }

        return totalPrice;
    }
}

export default FilteredList;