import React from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { addUser } from '../redux/action'

class AddUser extends React.Component{
    handleClick() {
        var text = this.refs.username.value;
        this.props.dispatch(addUser(text))
    }
    render(){
        console.log(this.props)
        return <from className="form-horizontal">
            <h2>添加用户</h2>
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
                <label htmlFor="userPassword" className="col-sm-2">密码</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="userPassword"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="userSex" className="col-sm-2">性别</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="userSex"/>
                </div>
            </div>
            <button className="btn btn-default" onClick={this.handleClick.bind(this)}>添加</button>
        </from>
    }
}

export default connect ()(AddUser)