import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux/Aux';




class WalmartCategory extends Component {

    constructor(props) {
        super(props);
       // console.log('this.props.categoriesArray', this.props.categoriesArray);
    };


    constructListItem = (item) => {
        // console.log(item);

        if (item.children) {
            return (

                <div key={item.id} style={{paddingLeft:'50px'}}>
                    {item.name} -- {item.id}
                    <WalmartCategory key={item.id} categoriesArray={item.children}/>
                </div>
            )

        } else {
            return (
                <div key={item.id} style={{paddingLeft:'25px'}}>
                    {item.name} -- {item.id}
                </div>
            )
        }


    };

    render() {
        return (
            <div>
                {
                    this.props.categoriesArray.map(category => this.constructListItem(category))
                }
            </div>
        )
    }
}

WalmartCategory.propTypes = {
    categoriesArray: PropTypes.array
};




export default WalmartCategory;


