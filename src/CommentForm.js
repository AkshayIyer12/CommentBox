//CommentForm.js
import React, { Component } from 'react';
import style from './style';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = { author: '', text: '' };
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleAuthorChange(e) {
		this.setState({ author: e.target.value });
	}
	handleTextChange(e) {
		this.setState({ text: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(`${this.state.author} said ${this.state.text}`);
		//will be trying this into the POST method in a bit
	}
}