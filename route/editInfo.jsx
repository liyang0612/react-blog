import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class EditInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioVal:''
        }
    }
    handleRadio(e) {
        this.setState({radioVal:e.target.value})
    }
    render() {
        return <from className="form-horizontal">
            <h2>修改用户信息</h2>
            <Link to="/" className="btn btn-default"><i className="glyphicon glyphicon-chevron-left"></i> 返回</Link>
            <br/>
            <hr/>
            <div className="form-group">
                <label htmlFor="userName" className="col-sm-2">用户名</label>
                <div className="col-sm-10">
                    <input type="text" ref="username" className="form-control" id="userName"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="userPassword" className="col-sm-2">旧密码</label>
                <div className="col-sm-10">
                    <input type="text" ref="password1" className="form-control" id="userPassword1"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="userPassword" className="col-sm-2">新密码</label>
                <div className="col-sm-10">
                    <input type="text" ref="password2" className="form-control" id="userPassword2"/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2">性别</label>
                <label htmlFor="userSex" className="col-sm-2 checkbox-inline">
                    <input type="radio" name="sex" value="男" onClick={this.handleRadio.bind(this)}/> 男
                    <input type="radio" name="sex" value="女" onClick={this.handleRadio.bind(this)}/> 女
                </label>
            </div>
            <button className="btn btn-default btn-success">保存修改</button>
        </from>
    }
}

export default connect ()(EditInfo)