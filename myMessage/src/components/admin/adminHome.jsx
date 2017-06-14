import React from 'react'
import { Link } from 'react-router'
import WebSocket from 'ws'

class AdminHom extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/admin" className="blog-a-color">后台首页</Link></li>
                        <li><Link to="/admin/add" className="blog-a-color">添加文章</Link></li>
                        <li><Link to="/" className="blog-a-color">留言管理</Link></li>
                    </ul>
                </nav>
                <section className="container-fluid">
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default AdminHom