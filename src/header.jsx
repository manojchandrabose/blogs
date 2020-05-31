import React, { Component } from 'react';
import {connect} from 'react-redux';
class Header extends Component {

handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const price = this.getPrice.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      price,
      message,
      editing:false
    }
	this.props.dispatch({
      type:'ADD',
      data});
    this.getTitle.value = '';
    this.getPrice.value = '';
    this.getMessage.value = '';
}

render() {

return (

<div>
<h2 className="m-2">Add Blog</h2>
  <form className="m-2" onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Blog Name" /><br /><br />
   <input required type="text" ref={(input)=>this.getPrice = input} placeholder="Author Name" /><br /><br />
   <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" placeholder="Blog Message" /><br /><br />
   <button className="btn btn-primary active btn-md">ADD</button>
  </form>
</div>

);

}

}

export default connect()(Header);