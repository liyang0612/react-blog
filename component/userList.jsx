import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {editUser, index} from '../redux/action'

class UserList extends React.Component {
    //将当前“编辑”的索引传给状态机
    handleIndex(index) {
        this.props.editAction(null, index)
        this.props.indexAction(index)
    }

    render() {
        var that = this;
        var text = this.props.values.add.map(function (val, index) {
            return <tr key={val.name}>
                <td>
                    <Link
                        to="editUser"
                        onClick={() => that.handleIndex(index)}
                        className="btn btn-default">
                        编辑 <i className="glyphicon glyphicon-pencil"></i></Link>
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
        values: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editAction: bindActionCreators(editUser, dispatch),
        indexAction: bindActionCreators(index, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)