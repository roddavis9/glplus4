import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Navigation from '../../components/Navigation/Navigation';
import Progress from '../../components/common/Progress';
import TopHeader from '../../components/common/TopHeader';


let wrapperClass = "gray-bg ";

  const layout = ( props ) => (

      <Aux>
        <Progress />
        <Navigation />

        <div id="page-wrapper" className={wrapperClass} style={{backgroundColor: 'red'}}>
          <TopHeader />

          <main style={{margin: 0, padding: 0}}>
              {props.children}
          </main>
        </div>
      </Aux>

  );

export default layout;