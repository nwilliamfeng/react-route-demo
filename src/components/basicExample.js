import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from 'react-router-dom'

import {Order} from './Order'
import {Customer} from './Customer'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

 
const About = ({location,match}) => {
  console.log(match);
return <div>
<h2>About</h2>

</div>
} 
  
 

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
   
  </div>
)

 

const NotFound=({match})=>{
  return <div>{'can not found the page :'+match.url}</div>
}

const Topics = ({ match }) => (
  <div className="collapse navbar-collapse">
    <h2>Topics</h2>
    <ul className='nav navbar-nav'>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>

      
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

export const BasicExample = () => (
  <Router>
    <div  className="collapse navbar-collapse">
      <ul className='nav navbar-nav'>
        <li><Link to="/">Home</Link></li>
        <li><NavLink activeStyle={{background:'red'}} to="/order">Order</NavLink></li>
        <li><NavLink activeStyle={{background:'blue'}} to="/customer">Customer</NavLink></li>
       
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/order" component={Order}/>
      <Route path="/customer" component={Customer}/>
      <Route path="/topics" component={Topics}/>
      
      <Route component={NotFound}/>
      </Switch>
     
    </div>
  </Router>
)
 