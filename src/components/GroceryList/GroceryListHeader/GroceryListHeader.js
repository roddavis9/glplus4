import React from 'react';

import Aux from '../../../hoc/Aux/Aux';


const groceryListHeader = ( props ) => (

    <Aux>
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-6" style={{fontSize: '15px'}}>
                    &lt;My Grocery List Name&gt;
                </div>
                <div className="col-md-6" style={{textAlign: 'right', fontSize: '12px'}}>
                    Last Updated:&nbsp;&nbsp;Dec. 2, 2017 3:30 EST
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    List Group Name
                </div>
                <div className="col-md-6" style={{textAlign: 'right', fontSize: '12px'}}>
                    Created:&nbsp;&nbsp;Dec. 2, 2017 3:30 EST
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    Summary
                </div>
                <div className="col-md-6" style={{textAlign: 'right', fontSize: '14px'}}>
                    &lt;&lt;&nbsp;Change List&nbsp;&gt;&gt;
                </div>
            </div>

        </div>
    </Aux>

);

export default groceryListHeader;
