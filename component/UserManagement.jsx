import React from 'react'
import UserList from './userList.jsx'
import UserHead from './UserHead.jsx'
import {Link} from 'react-router'
import {connect} from 'react-redux'

var thProps = ["编辑","name","password","sex","删除"]
var trProps = [
    {name:'liyang',password:'liyang0612',sex:'sex'}
]

class App extends React.Component{
    render() {
        // console.log(this.props)
        return <div>
            <h1>用户管理{this.props.name}</h1>
            <div>
                <Link to="addUser" className="btn btn-success"><i className="glyphicon glyphicon-user"></i> 添加新用户</Link>
            </div>
            <div className="from-group">
                <table className="table table-striped">
                    <UserHead list={thProps}/>
                    <UserList list = {trProps}/>
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

export default connect(mapStateToProps)(App)