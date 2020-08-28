import React from 'react';
import './Card.css';

const Card = (props) => {
    const {img,title,description,price} = props.course;
    return (
        <div className="col-md-4 mt-4">
            <div className="card">
                <img className="card-img-top" src={img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h5>price: ${price}</h5>
                    <button type="button" className="btn btn-primary" onClick={() => props.addCourse(props.course)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;