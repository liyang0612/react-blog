import React from 'react'
import UserList from './userList.jsx'
import UserHead from './UserHead.jsx'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"
import { deleteUser } from '../redux/action'

var thProps = ["编辑","name","password","sex","删除"]
class App extends React.Component{
    handleDELETE(index) {
        this.props.deleteAction(index)
    }
    render() {
        // console.log(this.props)
        return <div>
            <h1>用户管理</h1>
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
        name: state.add.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteAction: bindActionCreators(deleteUser,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)