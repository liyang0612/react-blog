import React from 'react'
class Login extends React.Component {
    render() {
        return (
            <div className="blog-login-wrap">
                <div className="blog-login-box container">
                    <form>
                        <div className="form-group">
                            <label>用户名：</label>
                            <input type="text" className="form-control" placeholder="请输入用户名"/>
                        </div>
                        <div className="form-group">
                            <label>密码：</label>
                            <input type="password" className="form-control" placeholder="请输入密码"/>
                        </div>
                        <div className="text-center"><button type="submit" className="btn btn-default">登录</button></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login