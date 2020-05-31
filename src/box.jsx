import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './posts';
import Edit from './edit';

// const Products = [
// 	{id:1,title:'COTTON T-SHIRT',price:150,message:"MS13K890",editing:false},
// 	{id:2,title:'PRINTS GIRLS TEE',price:200,message:"MS13K910",editing:false},
// 	{id:3,title:'FLOWER PATTERN SHIRT',price:190,message:"MS13K990",editing:false},
// 	{id:4,title:'CHECKED PATTERN SHIRT',price:170,message:"MS13K790",editing:false},
// 	{id:5,title:'POLO MEN T-SHIRT',price:300,message:"MS13K690",editing:false},
// ]

class Box extends Component {

render() {

return (

<div>
<h2 className="m-2">Blog(s) List :</h2>
{this.props.posts.map((post) => (
	<div key={post.id} className="m-2">
		{post.editing ? <Edit post={post} key={post.id} /> :
			<Posts key={post.id} post={post} />}
	</div>
))}
</div>

);

}

}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(Box);
// export default Box;