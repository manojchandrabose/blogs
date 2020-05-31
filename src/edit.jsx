import React, { Component } from 'react';
import {connect} from 'react-redux';
class Edit extends Component {

handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newPrice = this.getPrice.value;
  const newMessage = this.getMessage.value;
  const data = {
    newTitle,
    newPrice,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}

render() {

return (

<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Blog Name" /><br /><br />
    <input required type="text" ref={(input) => this.getPrice = input}
    defaultValue={this.props.post.price} placeholder="Author Name" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.post.message} cols="28" placeholder="Blog Message" /><br /><br />
    <button className="btn btn-success btn-sm m-2">Update</button>
  </form>
</div>

);

}

}



export default connect()(Edit);