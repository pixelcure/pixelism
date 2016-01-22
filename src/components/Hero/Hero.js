/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './Hero.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class Hero extends Component {

  render() {
    return (
        <section className={s.hero}>
          <span>Hero</span>
        </section>
    );
  }

}

export default Hero;
