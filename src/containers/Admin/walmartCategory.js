import React from 'react';

import Aux from '../../hoc/Aux/Aux';


const walmartCategory = ({data}) => {
    return (
        <ul>
            {data.map(m => {
                return (<li>
                    {m.title}
                    {m.children && <WalmartCategory data={m.children} />}
                </li>);
            })}
        </ul>
    );
}



export default walmartCategory;


