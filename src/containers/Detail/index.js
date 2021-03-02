import React, { Component } from 'react';
import { Card } from 'antd';
import './style.css'

class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			content: ''
		}
	}

	render() {
		return (
			<Card title={this.state.title} >
				<p className="detail" dangerouslySetInnerHTML={{__html:this.state.content}}></p>
			</Card>
		)
	}

	componentDidMount() {
		let url = 'http://www.dell-lee.com/react/api/detail.json';
		const id = this.props.match.params.id;

		fetch(url + '?id=' + id)
			.then(function (response) {
				return response.json();
			})
			.then((myJson) => {
				const data = myJson.data;
				this.setState(data)
			});
	}
}

export default Detail;

