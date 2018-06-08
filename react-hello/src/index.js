import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
	return (
		<div>
		<Fragment>
			<Hello/> <World/>!
		</Fragment>

		
			<div><MyButton/></div>
		</div>
	);
}

function Hello() {
	return <span>Hello</span>;
}

function World() {
	return <span>World</span>;
}

function MyButton() {
	let label = `Sucka`;

	return (<button>{label}</button>);
}

ReactDOM.render(
	<HelloWorld/>,
	document.querySelector('#root')
);
