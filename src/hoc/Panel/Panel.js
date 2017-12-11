import React from 'react';

import Input from '../../components/common/UI/Input/Input'

import Aux from '../../hoc/Aux/Aux';
import classes from './Panel.css';

const panel = ( props ) => (

    <Aux>
        <div className="panel panel-primary" style={{maxWidth: '500px'}}>
            <div className="panel-heading">
                Primary Panel
            </div>
            <div className="panel-body">
                <Input/>
            </div>
            <div className="panel-footer">
                Panel Footer
            </div>
        </div>
    </Aux>

);

export default panel;
