import React, { Component } from 'react'
import { List } from 'antd';
import { Link } from 'react-router-dom'

class PageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        // console.log(this.state.data)
        return (
            <List
                style={{ background: '#fff' }}
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                    <Link to={`/detail/${item.id}`}>
                        <List.Item>{item.title}</List.Item>
                    </Link>
                )}
            />
        )
    }

    componentDidMount() {
        let url = 'http://www.dell-lee.com/react/api/list.json';
        const id = this.props.match.params.id;
        if (id) {
            url = url + '?id=' + id;
        }
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    data: myJson.data
                })
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            let url = 'http://www.dell-lee.com/react/api/list.json';
            const id = this.props.match.params.id;
            if (id) {
                url = url + '?id=' + id;
            }
            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then((myJson) => {
                    this.setState({
                        data: myJson.data
                    })
                });
        }
    }

}
export default PageList