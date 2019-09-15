import React, { useState } from 'react';
import './form.scss'

function Form() {
	const [inputs, setInputs] = useState({ userName: '', password:''});
	const handleInputChange = (event) => {
		event.persist();
		setInputs(inputs => (
			{ ...inputs, [event.target.id]: event.target.value }
		))
		console.log(inputs);
		
	}
	return (
		<div>
			<section className="form animated flipInX">
				<h2>Login To Your Account</h2>
				<p className="valid">Valid. Please wait a moment.</p>
				<p className="error">Error. Please enter correct Username &amp; password.</p>
				<form className="loginbox" autoComplete="off">
					<input value={inputs.userName} placeholder="Username" type="text" id="userName" onChange={handleInputChange}></input>
					<input value={inputs.password} placeholder="Password" type="password" id="password" onChange={handleInputChange}></input>
					<button id="submit">Login</button>
				</form>
			</section>
		</div>
	);
}

export default Form;