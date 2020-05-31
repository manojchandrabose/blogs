import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';
import Box from './box';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      return state.concat([action.data]);
    case 'DELETE':
      return state.filter((post)=>post.id !== action.id);
	case 'EDIT':
      return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post);
	case 'UPDATE':
      return state.map((post)=>{
        if(post.id === action.id) {
          return {
             ...post,
             title:action.data.newTitle,
             price:action.data.newPrice,
             message:action.data.newMessage,
             editing: !post.editing
          }
        } else return post;
      });  
    default:
      return state;
  }
}
const store = createStore(postReducer);
class Post extends React.Component 
{
	render() {
		return (
			<div>
			<Header />
			<Box />
			</div>
		)
	}
}

ReactDOM.render(<Provider store={store}><Post /></Provider>,document.getElementById('root'));