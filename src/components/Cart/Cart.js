import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const coursePrice = props.addItem;
    const totalPrice = coursePrice.reduce((total,coursePrice) => total + coursePrice.price,0)
    return (
        <div className="content">
            <div className="row">
                <div className="col-sm-4">
                   <h3>Total Add Course: <span className="text-primary">{props.addItem.length}</span></h3>
                </div>
                <div className="col-sm-4">
                    <h3>Course Amounts: <span className="text-primary">${totalPrice}</span></h3>
                </div>
                <div className="col-sm-4">
                    <button type="button" className="btn btn-primary">Process Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;