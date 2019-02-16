import React,{Component} from 'react';
 
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


class Customer extends Component{
    render(){
        console.log(this.props);
        return <div>
            {'order'}
            </div>
    }
}


const mapStateToProps=(state)=>{
    return state.customer;
}

  const customer=connect(mapStateToProps)(Customer);

export {customer as Customer};
