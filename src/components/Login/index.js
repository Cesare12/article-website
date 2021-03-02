import './style.css'
import React, { Component } from 'react'
import { Modal, Button, Input, message } from 'antd';
import { Link, withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false,
            visible: false,
            user: null,
            password: null
        }
        this.showModal = this.showModal.bind(this)
        this.handleUser = this.handleUser.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.checkLogin = this.checkLogin.bind(this)
        this.logOut = this.logOut.bind(this)
    }

    showModal() {
        this.setState({
            visible: true
        })
    }

    handleUser(e) {
        this.setState({
            user: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    checkLogin() {
        const { user, password } = this.state;
        const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`;
        fetch(url, {
            credentials: 'include'
        })
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                const login = myJson.data.login;

                if (login) {
                    message.success('登陆成功');
                    this.setState({
                        visible: false,
                        login: true
                    })
                } else {
                    message.error('登陆失败');
                }
            });
    }

    logOut() {
        //server logout
        const url = 'http://www.dell-lee.com/react/api/logout.json';
        fetch(url, {
            credentials: 'include'
        })
            .then(function (response) {
                return response.json();
            }).then(myJson => {
                if (myJson.data.logout) {
                    this.setState({
                        login: false
                    })
                    this.props.history.push('/')
                }
            })
    }

    render() {
        const { login } = this.state;
        return (
            <>
                <div className="login">
                    {login ?
                        <Button type="primary" onClick={this.logOut}>退出</Button> :
                        <Button type="primary" onClick={this.showModal}>登陆</Button>
                    }
                    {
                        <Link to= {login ? '/vip' : '/'}>
                            <Button 
                                type="primary"
                                style={{ marginLeft: 10 }}
                            >
                                VIP
                            </Button>
                        </Link>
                    }
                </div>

                <Modal title="登陆"
                    visible={this.state.visible}
                    onOk={this.checkLogin}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}>
                    <Input
                        placeholder="请输入账户名"
                        onChange={this.handleUser}
                        style={{ marginBottom: 10 }}
                    />
                    <Input
                        placeholder="请输入密码"
                        onChange={this.handlePassword}
                    />
                </Modal>
            </>

        )
    }

    componentDidMount() {
        // check server isLogin
        fetch(('http://www.dell-lee.com/react/api/isLogin.json'), {
            credentials: 'include'
        })
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                const login = myJson.data.login;
                this.setState({ login })
            });
    }
}

export default withRouter(Login)