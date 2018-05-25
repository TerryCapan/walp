/**
 * IMPORTS
 */
import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

/**
 * VIEWS
 */
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="title">{this.props.title}</div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/podcasts">Podcasts</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}


/**
 * EXPORTS
 */
export default Header;
