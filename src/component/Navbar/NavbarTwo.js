import React, { Component } from "react";
import Sticky from "react-stickynode";
import { Link } from 'react-router-dom';

class NavbarTwo extends Component {
  render() {
    var { mClass, mContainer, mainlogo, stickylogo, showArticles } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <nav className={`navbar navbar-expand-lg navbar-light ${mClass}`}>
          <div className={`container ${mContainer}`}>
            <a className="navbar-brand logo_h" href="/">
              <img src={require("../../image/" + mainlogo)} alt="" />
              <img src={require("../../image/" + stickylogo)} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to='/'
                  >
                    Acasă
                  </Link>
                </li>
                {showArticles && <li className="nav-item">
                  <Link
                    className="nav-link"
                    to='/articole'
                  >
                    Articole
                  </Link>
                </li>}
              </ul>
            </div>
          </div>
        </nav>
      </Sticky>
    );
  }
}

export default NavbarTwo;
