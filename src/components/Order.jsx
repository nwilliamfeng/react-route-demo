import React,{Component} from 'react';
import {orderActions} from '../actions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


class Order extends Component{
    render(){
        console.log(this.props);
        return <div>
            {'order'}
            </div>
    }
}


const mapStateToProps=(state)=>{
    return state.order;
}

  const order=connect(mapStateToProps)(Order);

export {order as Order};
