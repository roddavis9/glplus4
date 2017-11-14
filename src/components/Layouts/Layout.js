import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Navigation from '../../components/Navigation/Navigation';
import Progress from '../common/Progress';
import TopHeader from '../common/TopHeader';


let wrapperClass = "gray-bg ";

  const layout = ( props ) => (

      <Aux>
        <Progress />
        <Navigation />

        <div id="page-wrapper" className={wrapperClass}>
          <TopHeader />

          <main>
              {props.children}
          </main>
        </div>
      </Aux>

  );

export default layout;