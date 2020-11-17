import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav id="menu" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span class="sr-only">Toggle navigation</span>{" "}
              <span class="icon-bar"></span> <span class="icon-bar"></span>{" "}
              <span class="icon-bar"></span>{" "}
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">
              Dr.green Team
            </a>{" "}
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="/chat" class="page-scroll">
                  chatting
                </a>
              </li>
              <li>
                <a href="#about" class="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#services" class="page-scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" class="page-scroll">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" class="page-scroll">
                  Lastest Project
                </a>
              </li>
              <li>
                <a href="#contact" class="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
    );
  }
}
export default NavBar;
