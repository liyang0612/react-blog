import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'

class UserList extends React.Component {
    render() {
        var that = this;
        var text = this.props.values.add.map(function (val,index) {
            return <tr key={val.name}>
                <td>
                    <Link to="editUser" className="btn btn-default">编辑 <i className="glyphicon glyphicon-pencil"></i></Link>
                </td>
                <td>{val.name}</td>
                <td>{val.password}</td>
                <td>{val.sex}</td>
                <td>
                    <button
                        className="btn"
                        onClick={() => that.props.handleDelete(index)}>删除
                        <i className="glyphicon glyphicon-remove"></i></button>
                </td>
            </tr>
        })
        return <tbody>
        {text}
        </tbody>
    }
}

function mapStateToProps(state) {
    return {
        values : state
    }
}


export default connect (mapStateToProps)(UserList)