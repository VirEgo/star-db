import React from 'react';
import './item-list.scss';

const ItemList = () => {
    return (
        <div className="item-list-wrapper">
            <ul className="list-group items">
                <li className="list-group-item">Luke Skywalker</li>
                <li className="list-group-item">Darth Vader</li>
                <li className="list-group-item">R2-D2</li>
            </ul>
        </div>
    );
}

export default ItemList;