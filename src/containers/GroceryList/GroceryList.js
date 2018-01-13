import React, {Component} from 'react';

import Input from '../../components/common/UI/Input/Input';
import GroceryListHeader from '../../components/GroceryList/GroceryListHeader/GroceryListHeader';
import GroceryListBody from '../../components/GroceryList/GroceryListBody/GroceryListBody';
import Modal from '../../components/Common/UI/Modal/Modal';

import Aux from '../../hoc/Aux/Aux';


class GroceryList extends Component {

    // old way of doing state
    // constructor(props) {
    //    super(props);
    //    this.state = {...};
    // }

    state = {
        list: {
            _id: '5a2d921e706e519564ff1139',
            userId: '5a2d921e706e519564ff1139',
            groupId: '5a2d921e706e519564ff1139',
            inventoryId: '5a2d921e706e519564ff1139',
            listName: 'rdavis9 Primary',
            groupName: 'rdavis9',
            summary: {},
            totalPrice: '',
            quantity: 1,
            listItems: [
                {
                        itemId: '123456',
                        item_name: "Campbell's Cheddar Cheese Soup",
                        net_wt: '10.75',
                        wt_uom: 'oz',
                        dept: 'grocery',
                        deptDisplayName: 'grocery',
                        categories: ['canned goods', 'pantry', 'test', 'health and nutrition'],
                        price_avg: '1.50',
                        quantity: 1,
                        recurring: false,
                        useBulk: true,
                        upc: '051000014771',
                        ean: '',
                        currentlySuggested: false


                },
                {
                    itemId: '234567',
                        item_name: "Hamburger Meat",
                        net_wt: '1',
                        wt_uom: 'lb',
                        dept: 'meat',
                        deptDisplayName: 'Meat',
                        categories: ['ground beef'],
                        price_avg: '2.50',
                        quantity: 2,
                        recurring: true,
                        useBulk: true,
                        upc: '',
                        ean: '',
                        currentlySuggested: true


                },
                {
                    itemId: '34567',
                    item_name: "Shampoo",
                    net_wt: '32',
                    wt_uom: 'oz',
                    dept: 'health',
                    deptDisplayName: 'Health',
                    categories: ['hair care'],
                    price_avg: '3.50',
                    quantity: 1,
                    recurring: true,
                    useBulk: true,
                    upc: '',
                    ean: '',
                    currentlySuggested: false


                }
            ],
            dateCreated: '2018-01-07T19:57:59.837Z',
            lastUpdated: '2017-12-10T19:59:26.211Z'

        }
    };

    addItemHandler = (itemId) => {
        console.log('addItemHandler loaded', this.state);
        let currentItem = this.state.list.listItems
            .filter((item) => { return item.itemId === itemId })
            .map()

        console.log('currentItem', currentItem);

        const oldQuantity = currentItem[0].quantity;

        console.log(oldQuantity);
/*
        const updatedQuantity = oldQuantity + 1;
        const updatedItem = {
            ...currentItem[0]
        };
        updatedItem.quantity = updatedQuantity;
        console.log('updatedQuantity', updatedQuantity);
        console.log('updatedItem', updatedItem);

        let testQuantity = updatedQuantity;


        this.setState((state) => ({
            list: {...this.state.list, listItems: {...this.state.list.listItems, quantity: state.list.listItems.quantity + 1}}
        }));

*/
        console.log('state loaded', this.state);

    };

    render() {
        console.log('list loaded');
        return (
            <Aux>
                <Modal/>
                <div className="panel panel-primary" style={{maxWidth: '500px'}}>
                    <div className="panel-heading">
                        <GroceryListHeader
                            listId={this.state.list._id}
                            listName={this.state.list.listName}
                            listGroupName={this.state.list.groupName}
                            lastLastUpdated={this.state.list.lastUpdated}
                            listCreated={this.state.list.dateCreated}
                        />
                    </div>
                    <div className="panel-body">
                        <button type="button" onClick={() => this.addItemHandler('123456')}>test</button>
                        <GroceryListBody
                            itemList={this.state.list.listItems}
                            itemAdded={this.addItemHandler}

                        />
                    </div>
                    <div className="panel-footer">
                        Panel Footer
                    </div>
                </div>
            </Aux>

        )
    }
}


export default GroceryList;
