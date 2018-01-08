import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';

import classes from './GroceryListItem.css';

class GroceryListItem extends Component {
    render() {
        let listItem = null;

        let categories = this.props.itemData.categories.map(category => {
            return category.toUpperCase() + ', '
        });

        let itemDisplay = (
            <Aux>
                <div className="row">
                    <div className="col-xs-1">
                        <input type="checkbox" id={this.props.itemData.itemId} value={this.props.itemData.itemId}/>
                    </div>
                    <div className="col-xs-1">
                        <span className={classes.quantity}>{this.props.itemData.quantity}</span>
                    </div>
                    <div className="col-xs-4">
                        {this.props.itemData.item_name}
                    </div>
                    <div className="col-xs-2">
                        &nbsp;&nbsp;&nbsp;&nbsp;{this.props.itemData.deptDisplayName.toUpperCase()}
                    </div>
                    <div className="col-xs-4">
                        <div className="text-right itemIcons" style={{color: '#000000'}}>
                            <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="text-right itemIcons" style={{color: '#E0AA27'}}>
                            <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="text-right itemIcons" style={{color: '#53739D'}}>
                            <i className="fa fa-compress fa-2x" aria-hidden="true"></i>
                        </div>
                        {this.props.itemData.recurring &&
                        <div className="text-right itemIcons" style={{color: 'green'}}>
                            <i className="fa fa-recycle fa-2x" aria-hidden="true"></i>
                        </div>
                        }
                        {this.props.itemData.currentlySuggested &&
                        <div className="text-right itemIcons" style={{color: '#FFCE36'}}>
                            <i className="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
                        </div>
                        }

                    </div>
                </div>
                <div className="row" style={{lineHeight: '250%'}}>
                    <div className="col-xs-2">
                        Size:&nbsp;&nbsp;{this.props.itemData.net_wt}&nbsp;{this.props.itemData.wt_uom}
                    </div>
                    <div className="col-xs-7">
                        {categories}
                    </div>
                    <div className="col-xs-3 price">
                    Price:&nbsp;&nbsp;{this.props.itemData.price_avg}
                    </div>
                </div>
            </Aux>

        );


        switch (this.props.itemData.dept) {
            case ('baby'):
                listItem = (
                    <div className={classes.babyItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('bakery'):
                listItem = (
                    <div className={classes.bakeryItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('beauty'):
                listItem = (
                    <div className={classes.beautyItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('beer'):
                listItem = (
                    <div className={classes.beerItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('beverages'):
                listItem = (
                    <div className={classes.beveragesItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('dairy'):
                listItem = (
                    <div className={classes.dairyItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('deli'):
                listItem = (
                    <div className={classes.deliItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('frozen'):
                listItem = (
                    <div className={classes.frozenItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('grocery'):
                listItem = (
                    <div className={classes.groceryItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('health'):
                listItem = (
                    <div className={classes.healthItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('household'):
                listItem = (
                    <div className={classes.householdItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('liquor'):
                listItem = (
                    <div className={classes.liquorItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('meat'):
                listItem = (
                    <div className={classes.meatItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('organic'):
                listItem = (
                    <div className={classes.organicItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('pet'):
                listItem = (
                    <div className={classes.petItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('pharmacy'):
                listItem = (
                    <div className={classes.pharmacyItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('produce'):
                listItem = (
                    <div className={classes.produceItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('seafood'):
                listItem = (
                    <div className={classes.seafoodItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('wine'):
                listItem = (
                    <div className={classes.wineItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            case ('other'):
                listItem = (
                    <div className={classes.otherItem}>
                        {itemDisplay}
                    </div>
                );
                break;
            default:
                listItem = null;
        }

        return listItem;
    }

}

GroceryListItem.propTypes = {
    itemData: PropTypes.object.isRequired
};


export default GroceryListItem;