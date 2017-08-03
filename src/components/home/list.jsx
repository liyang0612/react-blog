import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: []
        };
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: '/getArticle',
            params: {
            }
        }).then(res => {
            this.setState({
                article: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        let listItem = this.state.article.map(val => {
            return <div className="col-md-12" key={val._id}>
                <div className="bs-docs-section">
                    <div className="blog-list-box">
                        <h3>{val.title}</h3>
                        <p>{val.date}</p>
                        <div className="blog-list-text">
                            {val.content}
                        </div>
                        <Link to="/detail">more...</Link>
                    </div>
                </div>
            </div>
        })
        return (
            <div className="row">
                {listItem}
            </div>
        )
    }
}

export default List