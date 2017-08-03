import React from 'react'
import { hashHistory  } from 'react-router'
import axios from 'axios'
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        this.setState({
            [target.name]: target.value,
        })
    }

    handleLogin() {
        axios.post('/login', {
            userName: this.state.userName,
            password: this.state.password,
        }).then(res => {
            if(parseInt(res.data.status)) {
                hashHistory.push('/admin');
            }else {
                alert(res.data.msg)
            }
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="blog-login-wrap">
                <div className="blog-login-box container">
                    <form>
                        <div className="form-group">
                            <label>用户名：</label>
                            <input type="text" name="userName" className="form-control" placeholder="请输入用户名"
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label>密码：</label>
                            <input type="password" name="password" className="form-control" placeholder="请输入密码"
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-default"
                                    onClick={this.handleLogin}>登录</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login