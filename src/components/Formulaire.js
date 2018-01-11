//REACT
import React from 'react';

class Formulaire extends React.Component {

	createMessage = event => {
		

	};

	render(){
		return (
			<form
			   className="form" 
			   onSubmit={e => this.createMessage(e)}
			>
			 <textarea 
			   required 
			   maxLength="140"
			   ref={input => this.message = input}
			 >
			 </textarea>
			 <div className="info">140</div>
			 <button type="submit">Envoyer!</button>
			</form>
		)
	}
}

export default Formulaire;