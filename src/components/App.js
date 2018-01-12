//REACT
import React from 'react';

//Components
import Formulaire from './Formulaire';
import Message from './Message';

class App extends React.Component {


	state = {
		messages: {}
	};

	addMessage = message => {
		// Copier le state
		const messages = {...this.state.messages};
		// On ajoute le message avec un clé timestamp
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		// Mettre à jour notre State
		this.setState({ messages });
	};

	render(){
		return (
			<div className="box">
			 <div>
			 	<div className="messages">
			 	 <Message pseudo={this.props.params.pseudo}/>
			 	</div>
			 	<Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="140"/>
			 </div>
			</div>
		)
	}
}

export default App;