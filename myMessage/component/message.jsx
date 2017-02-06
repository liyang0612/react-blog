import React from 'react'

class Message extends React.Component {
    render() {
        let vals = this.props.texts;
        var text = vals.map(function (val) {
            console.log(val.key)
            return <li key={val.key} className="list-group-item">
                <span className="help-block">{val.text}</span>
            </li>
        })
        return <div className="panel-body">
            <ul className="list-group">
                {text}
            </ul>
        </div>
    }
}
export default Message