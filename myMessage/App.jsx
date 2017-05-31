import React from 'react';
import { Link } from 'react-router'
class App extends React.Component {
    render() {
        return (
            <div>
                <header className="container">
                    <div className="text-center blog-nav">
                        <ul>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <Link to="/message">Message</Link>
                            </li>
                        </ul>
                    </div>
                </header>
                <section className="container bs-docs-container">
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default App;