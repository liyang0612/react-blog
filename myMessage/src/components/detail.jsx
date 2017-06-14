import React from 'react'
import axios from 'axios'
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            date: '',
        }
    }
    componentWillMount() {
        axios('/getArticle').then(res => {
            this.setState({
                title: res.data[0].title,
                content: res.data[0].content,
                date: res.data[0].date
            })
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-docs-section blog-detail-box">
                            <div className="blog-list-box">
                                <h3>{this.state.title}</h3>
                                <p>{this.state.date}</p>
                                <div className="blog-list-text">
                                    {this.state.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail