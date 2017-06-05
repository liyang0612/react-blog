import React from 'react'
import ajax from '../../ajax'

class add extends React.Component {
    render() {
        ajax('post', '/addArticle', function (data) {

        },{
            "title": "这是文章列表标题",
            "content": '这里是部分文章内容',
            "date": "这里是日期"
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-docs-section blog-detail-box">
                            <div className="form-group">
                                <label>标题：</label>
                                <input type="text" className="form-control" placeholder="Text input"/>
                            </div>
                            <div className="form-group">
                                <label>内容：</label>
                                <textarea className="form-control" rows="15"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-default">发表</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default add