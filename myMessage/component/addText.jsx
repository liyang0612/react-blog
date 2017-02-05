import React from 'react'
import {addText} from '../action/action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class AddText extends React.Component {
    handleSubmit() {
        var keyState = this.props.keyState,
            text = this.refs.text.value,
            val = {text: text, key: keyState[keyState.length - 1].key + 1}
        this.props.addAction(val)
    }

    render() {
        return <div className="panel panel-success">
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <textarea className="form-control" ref="text"></textarea>
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