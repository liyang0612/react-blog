import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {editUser} from '../redux/action'

class EditInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioVal: this.props.info[this.props.index].sex
        }
    }

    handleRadio(e) {
        this.setState({radioVal: e.target.value})
    }

    //保存修改
    handleEdit() {
        var inputs = document.getElementsByClassName("textinput"),
            username = document.getElementById('userName').value,
            password1 = document.getElementById('userPassword1').value,
            password2= document.getElementById('userPassword2').value,
            objText = {};
        for (let i = 0; i < inputs.length; i++) {
            objText[inputs[i].name] = inputs[i].value;
        }
        objText.sex = this.state.radioVal;
        if(username==""||password1==""||password2=="")
            alert("信息填写不全");
        else if(password1!==password2)
            alert("两次密码不一致");
        else this.props.editActon(objText);
    }

    render() {
        let info = this.props.info, index = this.props.index;
        console.log(info, index)
        return <from className="form-horizontal">
            <h2>修改用户信息</h2>
            <Link to="/" className="btn btn-default"><i className="glyphicon glyphicon-chevron-left"></i> 返回</Link>
            <br/>
            <hr/>
            <div className="form-group">
                <label htmlFor="userName" className="col-sm-2">用户名</label>
                <div className="col-sm-10">
                    <input type="text"
                           defaultValue={info[index].name}
                           ref="username" name="name" className="textinput form-control" id="userName"/>
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
                    <input type="text" ref="password2" name="password" className="textinput form-control"
                           id="userPassword2"/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2">性别</label>
                <label htmlFor="userSex" className="col-sm-2 checkbox-inline">
                    <input type="radio" name="sex" value="男" defaultChecked={this.state.radioVal=="男"?"checked":""}
                           onClick={this.handleRadio.bind(this)}/> 男
                    <input type="radio" name="sex" value="女" defaultChecked={this.state.radioVal=="女"?"checked":""}
                           onClick={this.handleRadio.bind(this)}/> 女
                </label>
            </div>
            <button
                className="btn btn-default btn-success"
                onClick={this.handleEdit.bind(this)}
            >保存修改
            </button>
        </from>
    }
}
function mapStateToProps(state) {
    return {
        info: state.add,
        index: state.index
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editActon: bindActionCreators(editUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo)