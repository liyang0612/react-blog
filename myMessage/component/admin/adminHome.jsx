import React from 'react'
import { Link } from 'react-router'
class AdminHom extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/admin/add" className="blog-a-color">添加文章</Link></li>
                        <li><a className="blog-a-color">后台管理</a></li>
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