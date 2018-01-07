import React, {Component} from 'react';

import Input from '../../components/common/UI/Input/Input';
import GroceryListHeader from '../../components/GroceryList/GroceryListHeader/GroceryListHeader';

import Aux from '../../hoc/Aux/Aux';


class GroceryList extends Component {
    render() {
        return (
            <Aux>
                <div className="panel panel-primary" style={{maxWidth: '500px'}}>
                    <div className="panel-heading">
                        <GroceryListHeader/>
                    </div>
                    <div className="panel-body">
                        <Input/>
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
