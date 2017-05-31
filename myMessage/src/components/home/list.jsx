import React from 'react'
import { Link } from 'react-router'
class List extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="bs-docs-section">
                        <div className="blog-list-box">
                            <h3>这是文章列表标题</h3>
                            <p>这里是日期</p>
                            <div className="blog-list-text">
                                这里是部分文章内容
                            </div>
                            <Link to="/detail">more...</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default List