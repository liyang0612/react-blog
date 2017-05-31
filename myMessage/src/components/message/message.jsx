import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { deleteText } from '../../redux/action/action'

class Message extends React.Component {
    handleDelete(key) {
        this.props.deleteAction(key)
    }
    render() {
        var divStyle = {
            float: 'right'
        }
        let vals = this.props.texts;
        var _this = this;
        var text = vals.map(function (val) {
            return <li key={val.key} className="list-group-item">
                <span>Jack：</span>
                <input
                    style={divStyle}
                    className="btn btn-default"
                    onClick={() => _this.handleDelete(val.key)}
                    type="button"
                    value="删除此条留言"/>
                <span className="help-block message-text">{val.text}</span>
            </li>
        })
        return <div className="panel-body">
            <ul className="list-group">
                {text}
            </ul>
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteAction: bindActionCreators(deleteText, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Message)