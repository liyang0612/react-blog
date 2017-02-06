import React from 'react';
import Message from './component/message.jsx'
import AddText from './component/addText.jsx'
import {connect} from 'react-redux'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    render() {
        return (
            <div className="container">
                <h2>简易留言板——react+webpack + node+express</h2>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <div className="panel-title">留言板</div>
                    </div>
                    <Message texts={this.props.texts}/>
                </div>
                <AddText/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        texts: state
    }
}


export default connect(mapStateToProps)(App);