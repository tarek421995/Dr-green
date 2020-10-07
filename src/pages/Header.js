import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div class="intro">
          <div class="overlay">
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-md-offset-2 intro-text">
                  <h1>Dr.Green Team Services</h1>
                  <p>
                    A team of qualified agricultural engineers from various
                    departments and specialties are ready to provide
                    agricultural services in the field of nurseries, garden
                    design, animal breeding programs, feeding them, and
                    providing field services.
                  </p>
                  <a href="#about" class="btn btn-custom btn-lg page-scroll">
                    See More Info
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
