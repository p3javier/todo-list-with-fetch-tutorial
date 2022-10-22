import React, { useState } from "react";


//create your first component

const randomId = () => Math.round(Math.random()*1000);

const Input = (props) => {
	const { onNewElement } = props;
	const [ text, setText ] = useState("");
	const handleChange = (event) => {
		const { value } = event.target;
		setText(value);
	}

	

	const handleSubmit = (event)  => {
		event.preventDefault();

		onNewElement({id: randomId() , label: text, done: false})
		setText("");
	}
	return (
		<div className="text-center">
			<form onSubmit={handleSubmit}>
				
				<input 
					type="text" 
					placeholder="Type your task here"
					onChange={handleChange}
					value={text} />
				<button type="submit" className="btn btn-primary">
					Create ToDo
				</button>
			</form>
			
		</div>
	);
};

export default Input;
