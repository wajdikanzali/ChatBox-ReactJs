//REACT
import React from 'react';

class Message extends React.Component {
	render(){
		return (
			<p className="user">
			 {this.props.pseudo}: Mon super message!
			</p>
		)
	}
}

export default Message;