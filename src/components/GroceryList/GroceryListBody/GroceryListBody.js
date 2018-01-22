import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './GroceryListBody.css';
import GroceryListItem from '../GroceryListItem/GroceryListItem';

class GroceryListBody extends Component {
    render() {

        let itemsArray = this.props.itemList.map((item, index) => {
            // console.log(item);
            return (
                <div className="row" key={item.itemId + index}>
                    <GroceryListItem
                        itemData={item}
                        listEditMode={this.props.listEditMode}
                        addItem={() => this.props.itemAdded(item.itemId)}
                    />
                </div>
            )
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if (itemsArray.length === 0) {
            itemsArray = <p>Please start adding items</p>
        }

        return (
            <div className="col-md-12">
                {itemsArray}
            </div>
        );
    }

}

GroceryListBody.propTypes = {
    itemList: PropTypes.array.isRequired,
    listEditMode: PropTypes.bool,
    itemAdded: PropTypes.func
};


export default GroceryListBody;