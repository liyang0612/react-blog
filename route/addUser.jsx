import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {addUser} from '../redux/action'
import {bindActionCreators} from 'redux'
import myAjax from '../myAjax'

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioVal: ""
        }
    }

    handleRadio(e) {
        this.state.radioVal = e.target.value;
    }

    handleClick() {
        var userName = this.refs.username.value,
            userPassword = this.refs.password.value,
            userSex = this.state.radioVal,
            index;
        myAjax('get', '/api', function (data) {
            index = JSON.parse(data).length;
        },{});
        var text = {
            name: userName,
            password: userPassword,
            sex: userSex,
            index: index
        };
        if (userName == "" || userPassword == "" || userSex == "") {
            alert("表单未填写完整");
            return false;
        } else {
            this.props.addAction(text)
            this.refs.username.value = this.refs.password.value = ""
            alert("添加成功")
        }
    }

    render() {
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
                    <input type="text" ref="password" className="form-control" id="userPassword"/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2">性别</label>
                <label htmlFor="userSex" className="col-sm-2 checkbox-inline">
                    <input type="radio" name="sex" value="男" onClick={this.handleRadio.bind(this)}/> 男
                    <input type="radio" name="sex" value="女" onClick={this.handleRadio.bind(this)}/> 女
                </label>
            </div>
            <button className="btn btn-default" onClick={this.handleClick.bind(this)}>添加</button>
        </from>
    }
}

//把store中的状态绑定到props
function mapStateToProps(state) {
    return {
        info: state.add
    }
}

//把action绑定到props
function mapDispatchToProps(dispatch) {
    return {
        addAction: bindActionCreators(addUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)