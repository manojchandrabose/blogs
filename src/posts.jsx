import React, { Component } from 'react';
import {connect} from 'react-redux';
class Posts extends Component {

render() {

return (

<div>
  <h3>Title: {this.props.post.title}</h3>
  <h4>Author: {this.props.post.price}</h4>
  <p>Message: {this.props.post.message}</p>
  <button className="btn btn-secondary btn-sm m-2"
   onClick={()=>this.props.dispatch({type:'EDIT',id:this.props.post.id})}>
   Edit</button>
  <button className="btn btn-danger btn-sm" 
  onClick={()=>this.props.dispatch({type:'DELETE',id:this.props.post.id})}>
  Delete</button>
</div>

);

}

}



export default connect()(Posts);