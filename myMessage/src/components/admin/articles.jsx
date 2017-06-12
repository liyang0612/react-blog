import React from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { articleUpdate } from '../../redux/action/action'
import axios from 'axios'

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articlesData: []
        }
    }

    componentDidMount() {
        axios.get('/getArticle').then(res => {
            this.setState({
                articlesData: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    handleDelete(id, index) {
        axios.post('/deleteArticle', {
            articleId: id
        }).then(res => {
            let listItem = this.state.articlesData;
            listItem.splice(index, 1);
            this.setState({
                articlesData: listItem
            })
        })
    }
    handleUpate() {
        this.props.articleUpdate({
            title: '1',
            content: '123'
        })
    }
    render() {
        var listItems = this.state.articlesData.map((item, index) => {
            return <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>
                    <Link
                        to="/admin/update"
                        className="btn btn-default btn-sm"
                        onClick={() => this.handleUpate()}>编辑</Link>
                    <button className="btn btn-default btn-sm" onClick={() => this.handleDelete(item.articleId, index)}>删除</button>
                </td>
            </tr>
        })
        return (
            <div className="container-fluid">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>文章标题</th>
                        <th>时间</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listItems}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        articleUpdate: bindActionCreators(articleUpdate, dispatch)
    }
}

export default connect("",mapDispatchToProps)(Articles)