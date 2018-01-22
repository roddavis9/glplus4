import React, {Component} from 'react';
import { Location, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import classes from './GroceryListItem.css';
import Checkbox from './../../Common/UI/Checkbox/Checkbox';

import * as actions from './../../../store/actions/index';

class GroceryListItem extends Component {

    render() {

        let listItem = null;
        let itemDisplay = null;

        let numCategories = this.props.itemData.categories.length;
        let categories = this.props.itemData.categories.map((category, index) => {
            if (numCategories === index + 1) {
                return category;
            } else {
                return category + ', '
            }
        });

        let itemTotalPrice = (this.props.itemData.quantity * this.props.itemData.price_avg).toFixed(2);

        if (this.props.listEditMode) {
            // edit mode
            itemDisplay = (
                <Aux>
                    <div className="row">
                        <div className="col-xs-1">
                            <Checkbox id={this.props.itemData.itemId} value={this.props.itemData.itemId} />
                        </div>
                        <div className="col-xs-1">
                            <input
                                className={classes.quantity}
                                type="number"
                                onChange={this.props.addItem}
                                defaultValue={this.props.itemData.quantity}
                                step="1"
                                min="1"
                                max="99"
                            />
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
                    <div className="row">
                        <div className="col-xs-1" style={{whiteSpace: 'nowrap'}}>
                            $<input
                            className={classes.quantity}
                            type="number"
                            defaultValue={this.props.itemData.price_avg}
                            step="0.01"
                            min="1"
                            max="1000"
                        />
                        </div>

                        <div className="col-xs-3">
                            {this.props.itemData.net_wt}&nbsp;{this.props.itemData.wt_uom}
                        </div>
                        <div className="col-xs-5">
                            {categories}
                        </div>
                        <div className="col-xs-3 price">
                            Total:&nbsp;&nbsp;${itemTotalPrice}
                        </div>
                    </div>
                </Aux>

            );

        } else {
            // add mode
            itemDisplay = (
                <Aux>
                    <div className="row">
                        <div className="col-xs-1">
                            <input
                                className={classes.quantity}
                                type="number"
                                onChange={this.props.addItem}
                                defaultValue={this.props.itemData.quantity}
                                step="1"
                                min="1"
                                max="99"
                            />
                        </div>
                        <div className="col-xs-2">
                            {this.props.itemData.net_wt}&nbsp;{this.props.itemData.wt_uom}
                        </div>
                        <div className="col-xs-6">
                            {this.props.itemData.item_name.toUpperCase()}
                        </div>
                        <div className="col-xs-3">
                            <div className="text-right itemIcons" style={{color: '#000000'}}>
                                <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
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
                    <div className="row">
                        <div className="col-xs-1" style={{whiteSpace: 'nowrap'}}>
                            $<input
                            className={classes.quantity}
                            type="number"
                            defaultValue={this.props.itemData.price_avg}
                            step="0.01"
                            min="1"
                            max="1000"
                        />
                        </div>
                        <div className="col-xs-2" style={{textTransform: 'capitalize'}}>
                            {this.props.itemData.deptDisplayName}
                        </div>
                        <div className="col-xs-6" style={{textTransform: 'capitalize'}}>
                            {categories}
                        </div>
                        <div className="col-xs-3 price">
                            Total:&nbsp;&nbsp;${itemTotalPrice}
                        </div>
                    </div>
                </Aux>

            );
        }


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
    itemData: PropTypes.object.isRequired,
    listEditMode: PropTypes.bool,
    addItem: PropTypes.func
};


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email) => dispatch(actions.auth(email)),
        onCheckTimeout: () => dispatch(actions.checkAuthTimeout()),
        onSetProfile: () => dispatch(actions.authSetProfile()),
    }
};


export default withRouter(connect(null, mapDispatchToProps)(GroceryListItem));