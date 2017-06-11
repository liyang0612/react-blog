import React from 'react'
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

    render() {
        var listItems = this.state.articlesData.map((item) => {
            return <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>
                    <button className="btn btn-default btn-sm">编辑</button>
                    <button className="btn btn-default btn-sm">删除</button>
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

export default Articles