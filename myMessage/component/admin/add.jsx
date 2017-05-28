import React from 'react'

class add extends React.Component {
    render() {
        return (
            <div className="container blog-container">
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