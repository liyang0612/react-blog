import React from 'react'
class Detail extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-docs-section blog-detail-box">
                            <div className="blog-list-box">
                                <h3>这是文章列表标题</h3>
                                <p>这里是日期</p>
                                <div className="blog-list-text">
                                    这里是文章内容
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