import React from 'react'
import { hashHistory } from 'react-router'
import {connect} from 'react-redux'
import axios from 'axios'

class add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

	componentWillMount() {
        let articleUpdate = this.props.articleUpdate;
        if(articleUpdate.length){
            this.setState({
                title: articleUpdate[0].title,
                content: articleUpdate[0].content
            })
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit() {
        if(this.props.articleUpdate.length){
            axios.post('/insertArticle', {
                title: this.state.title,
            }).then(res => {
                console.log(2342)
            })
        }else{
            axios.post('/addArticle', {
                title: this.state.title,
                content: this.state.content,
                date: (new Date()).toLocaleString()
            }).then(res => {
                console.log(res.data);
                hashHistory.push("/admin");
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-docs-section blog-detail-box">
                            <div className="form-group">
                                <label>标题：</label>
                                <input name="title" type="text" className="form-control" placeholder="Text input"
                                       onChange={this.handleInputChange}
                                       defaultValue={this.state.title}/>
                            </div>
                            <div className="form-group">
                                <label>内容：</label>
                                <textarea name="content" className="form-control" rows="15"
                                          onChange={this.handleInputChange}
                                          defaultValue={this.state.content}></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-default" onClick={this.handleSubmit}>发表</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
		articleUpdate: state.articleUpdate
	}
}

export default connect(mapStateToProps)(add)