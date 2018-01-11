//REACT
import React from 'react';
import { render } from 'react-dom';

//CSS
import  './index.css';

class Connexion extends React.Component {
	render(){
		return (
			<div className="connexionBox">
			 <form className="connexion">
				<input type="text" placeholder="Pseudo" required/>
				<button type="submit">GO</button>
			 </form>
			</div>
		)
	}
}


render(
	<Connexion/>,
	document.getElementById('root')
);