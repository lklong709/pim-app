/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React, { Component } from 'react';

import SelectComponent from '../../../components/Select';
import './index.scss';

class FormSelection extends Component {
  constructor(props) {
    super(props);

    this.field = this.props.field;
  }

  render() {
    return (
      <SelectComponent
        value={this.field.getValueSelected}
        options={this.field.getDataSelectOptions}
        className="fs-14"
        isBorder={true}
        //onFocus={this.field.changed}
        onBlur={this.field.blurred}
        // isMulti={multi}
        onChange={this.field.handleChange}
      />
    );
  }
}

export default FormSelection;
