import React, { Component } from 'react'
import logo from './logo.png'
import './style.css'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch('http://www.dell-lee.com/react/api/header.json')
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                // console.log(myJson);
                this.setState({
                    list: myJson.data
                })
            });

    }

    getList() {
        return this.state.list.map((item) => {
            return (
                <Menu.Item key={item.id} >
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="header-logo" />
                </Link>
                <Menu className="header-menu" mode="horizontal">
                    {this.getList()}
                </Menu>
            </>
        )
    }
}

export default AppHeader