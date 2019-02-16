
import {customerConstants} from '../constants'
export const customerActions={
    loadCustomer,
}

function loadCustomer() {

    return {type:customerConstants.LOAD_CUSTOMER}
  }