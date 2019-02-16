
import {orderConstants} from '../constants'
export const orderActions={
    createOrder,
}

function createOrder() {

    return {type:orderConstants.CREATE_ORDER}
  }