import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

/* 
 * Class that returns the product display portion of the website, either in the products option section or the cart.
 * The props are: either the product options (list) or cart (dictionary), isInCart (boolean - true if cart, false if list of product options), and 
 * four functions: addToCart, removeFromCart, addQuantity, subtractQuantity.
 */
class DisplayList extends React.Component {
    constructor(props) {
        super(props);
    }

    // Display product function for an item in the list of product options. It has "Add to Cart" button.
    displayProduct(item) {
        return (
            <div className="item-info">
                <img className='img' src={item.img} alt="Image" width="300" />
                <div className='text'><b>{item.name}</b></div>
                <div className='text'>{item.gender} | {item.type} </div>
                <div className='text'><b> ${item.price.toFixed(2)}</b></div>
                <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />} onClick={() => this.props.addToCart(item)}> Add to Cart </Button>
            </div>
        );
    }

    // Display product function for an item in the cart. It has "Add Quantity (up arrow)", "Subtract Quantity (down arrow)", and "Remove from Cart" buttons.
    displayProductInCart(item) {
        return (
            <div className="item-info">
                <img className='img' src={item.img} alt="Image" width="150" />
                <div className='text'><b>{item.name}</b></div>
                <div className='text'>{item.gender} | {item.type} </div>
                <div className='text'><b> ${item.price.toFixed(2)}</b></div>
                <div className='text'><b>Quantity: </b>{item.count}</div>
                <IconButton size="small" aria-label="subtract" onClick={() => { this.props.subtractQuantity(item) }}>
                    {<ArrowDropDownIcon />}
                </IconButton>
                <IconButton size="small" aria-label="add" onClick={() => { this.props.addQuantity(item) }}>
                    {<ArrowDropUpIcon />}
                </IconButton>
                <br />
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => this.props.removeFromCart(item)}> Remove </Button>
            </div>
        );
    }

    // returns display for this.props.list
    display() {
        if (this.props.isInCart) {
            // if isInCart is true, then this.props.list passed in is the cart dictionary (item id -> item info) from FilteredList.js
            return Object.keys(this.props.list).map(key =>
                this.displayProductInCart(this.props.list[key]));
        }
        else {
            // if false, then this.props.list is the list of items to show as options
            return this.props.list.map(item => this.displayProduct(item));
        };
    }

    render() {
        if (this.props.list === undefined || this.props.list.length === 0) {
            return null;
        }

        return (
            <div className="product">
                {this.display()}
            </div>
        );
    }
}


export default DisplayList;