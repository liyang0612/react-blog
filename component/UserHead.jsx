import React from 'react'

class UserHead extends React.Component {
    render() {
        var text = this.props.list.map(function (val) {
            return <th key={val}>{val}</th>
        })
        return <thead>
        <tr>
            {text}
        </tr>
        </thead>
    }
}

export default UserHead