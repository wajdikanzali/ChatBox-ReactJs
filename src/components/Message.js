//REACT
import React from 'react';

class Message extends React.Component {
	render(){
		return (
			<p className="user">
			 {this.props.details.pseudo}: {this.props.details.message}!
			</p>
		)
	}
}

export default Message;