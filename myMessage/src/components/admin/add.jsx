import React from 'react'
import ajax from '../../ajax'
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

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit() {
        axios.post('/addArticle', {
            title: this.state.title,
            content: this.state.content,
            date: (new Date()).toLocaleString()
        }).then(res => {
            console.log(res.data)
        })
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
                                       onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <label>内容：</label>
                                <textarea name="content" className="form-control" rows="15"
                                          onChange={this.handleInputChange}></textarea>
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

export default add