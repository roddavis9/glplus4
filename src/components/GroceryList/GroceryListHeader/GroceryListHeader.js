import React, {Component} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import PropTypes from 'prop-types';
import { Link, Location, withRouter } from 'react-router-dom';

import Aux from '../../../hoc/Aux/Aux';

import * as actions from './../../../store/actions/index';

class GroceryListHeader extends Component {

    render() {
        let listName = this.props.listName.toUpperCase();
        let lastUpdated = this.props.listLastUpdated;
        let createdDate = this.props.listCreated;
        let toggleOnClick = this.props.toggleListDisplay;

        return (
            <Aux>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-5" style={{fontSize: '15px'}}>
                            {listName}
                        </div>
                        <div className="col-xs-7" style={{textAlign: 'right', fontSize: '12px'}}>
                            Last Updated:&nbsp;&nbsp;<Moment format="MM-DD-YYYY HH:mm">{lastUpdated}</Moment>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6" style={{fontSize: '12px'}}>
                            Group:&nbsp;&nbsp;{this.props.listGroupName}
                        </div>
                        <div className="col-xs-6" style={{textAlign: 'right', fontSize: '12px'}}>
                            Created:&nbsp;&nbsp;<Moment format="MM-DD-YYYY HH:mm">{createdDate}</Moment>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                            <Link to="">Summary</Link>
                        </div>
                        <div className="col-xs-4 text-center">
                            <a onClick={toggleOnClick}>Toggle Display</a>
                        </div>
                        <div className="col-xs-4" style={{textAlign: 'right', fontSize: '14px'}}>
                            &lt;&lt;&nbsp;Change List&nbsp;&gt;&gt;
                        </div>
                    </div>

                </div>
            </Aux>
        )
    }
}

GroceryListHeader.propTypes = {
    listId: PropTypes.string.isRequired,
    listName: PropTypes.string.isRequired,
    listGroupName: PropTypes.string.isRequired,
    listLastUpdated: PropTypes.string,
    listCreated: PropTypes.string,
    listEditMode: PropTypes.bool
};


const mapDispatchToProps = dispatch => {
    return {
        toggleListDisplay: () => dispatch(actions.toggleListDisplay())
    }
};


export default connect(null, mapDispatchToProps)(GroceryListHeader);

