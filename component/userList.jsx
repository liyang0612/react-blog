import React from 'react'

class UserList extends React.Component {
    render() {
        var text = this.props.list.map(function (val) {
            return <tr key={val.name}>
                <td>
                    <button className="btn">编辑 <i className="glyphicon glyphicon-pencil"></i></button>
                </td>
                <td>{val.name}</td>
                <td>{val.password}</td>
                <td>{val.sex}</td>
                <td>
                    <button className="btn">删除 <i className="glyphicon glyphicon-remove"></i></button>
                </td>
            </tr>
        })
        return <tbody>
        {text}
        </tbody>
    }
}

export default UserList