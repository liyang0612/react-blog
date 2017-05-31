import React from 'react'

const articlesData = [
    {id: "1", title: "标题1", date: '2017-02-03'},
    {id: "2", title: "标题2", date: '2017-05-08'}
    ]
class Articles extends React.Component {
    render() {
        let listItems = articlesData.map((item) => {
            return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>
                    <button className="btn btn-default btn-sm">编辑</button>
                    <button className="btn btn-default btn-sm">删除</button>
                </td>
            </tr>
        })
        return(
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