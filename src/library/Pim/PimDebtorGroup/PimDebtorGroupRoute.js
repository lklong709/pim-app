/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import AesirxApiInstance from 'aesirx-dma-lib/src/gateway/Instance';
import BaseRoute from 'aesirx-dma-lib/src/Abstract/BaseRoute';

class PimDebtorGroupRoute extends BaseRoute {
  option = 'reditem-category_tag_44';

  getList = (dataFilter = {}) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: this.option,
        ...dataFilter,
      })
    );
  };

  createFilters = (filters) => {
    let buildFilter = {};

    for (const [key, value] of Object.entries(filters)) {
      if (Array.isArray(value)) {
        buildFilter['filter[' + key + '][]'] = value;
      } else {
        buildFilter['filter[' + key + ']'] = value;
      }
    }

    return buildFilter;
  };

  getDetail = (id = 0, filter = {}) => {
    return AesirxApiInstance().get(
      this.createRequestURL({
        option: this.option,
        id: id,
        ...filter,
      })
    );
  };

  create = (data) => {
    return AesirxApiInstance().post(
      this.createRequestURL({
        option: this.option,
      }),
      data
    );
  };
  update = (data) => {
    return AesirxApiInstance().put(
      this.createRequestURL({
        option: this.option,
      }),
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  };
  delete = (id) => {
    return AesirxApiInstance().delete(
      this.createRequestURL({
        option: this.option,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: { id: id },
      }
    );
  };
}

export default PimDebtorGroupRoute;