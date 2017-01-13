import React from 'react'
import UserList from './userList.jsx'
import UserHead from './UserHead.jsx'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {deleteUser} from '../redux/action'
import myAjax from '../myAjax'


var thProps = ["编辑", "name", "password", "sex", "删除"]
class App extends React.Component {
    handleDELETE(index) {
        var password = prompt("请先输入密码")
        if (password === this.props.name[index].password)
            this.props.deleteAction(index)
        else alert("密码错误")
    }
    handleAjax () {
        myAjax('post','/api',function (data) {
            console.log(data)
        },{name: "age",password: "a",sex:18})
    }
    render() {
        return <div>
            <h1 onClick={this.handleAjax.bind(this)}>用户管理</h1>
            <div>
                <Link to="addUser" className="btn btn-success"><i className="glyphicon glyphicon-user"></i> 添加新用户</Link>
            </div>
            <div className="from-group">
                <table className="table table-striped">
                    <UserHead list={thProps}/>
                    <UserList handleDelete={this.handleDELETE.bind(this)}/>
                </table>
            </div>
        </div>
    }
}
function mapStateToProps(state) {
    return {
        name: state.add
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteAction: bindActionCreators(deleteUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)