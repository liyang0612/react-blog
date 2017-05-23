import React from 'react'
import {addText} from '../../action/action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class AddText extends React.Component {
    handleSubmit() {
        var keyState = this.props.keyState,
            text = this.refs.text.value,
            key,
            keyLen = keyState.length;
        (keyLen == 0) ? (key = 0) : (key = parseInt(keyState[keyState.length - 1].key) + 1);
        var val = {text: text, key: key};
        this.props.addAction(val);
        this.refs.text.value = "";
    }

    render() {
        return <div className="panel panel-success">
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <textarea placeholder="说说你的看法" className="form-control" ref="text"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="button" value="我要留言" className="btn btn-default"
                               onClick={() => this.handleSubmit()}/>
                    </div>
                </form>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        keyState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAction: bindActionCreators(addText, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddText)