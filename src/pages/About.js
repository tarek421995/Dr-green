import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="about-text">
                <h2>
                  Welcome to <span>Dr. Green's initiative</span>
                </h2>
                <hr />
                <p>
                  ًwe have done a virous real project in fields of landscpaing ,
                  Mashroom plant project at many places ,{" "}
                </p>
                <p>
                  As a team We aim to plant 1 million trees in Syria in various
                  provinces and sectors to make Syria a greener, vibrant and
                  healthier place
                </p>
                <p>
                  Practical support for new students to introduce the College of
                  Agricultural Engineering and its fields, in addition to
                  providing advice to students to choose their specialties and
                  the field they like
                </p>
                <a href="#services" class="btn btn-custom btn-lg page-scroll">
                  View All Services
                </a>{" "}
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="about-media">
                {" "}
                <img src="img/about-1.jpg" alt=" " />{" "}
              </div>
              <div class="about-desc">
                <h3>Garden Care</h3>
                <p>
                  As a result of qualified engineers we use the most binifical
                  method of applying what we have learned .
                </p>
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="about-media">
                {" "}
                <img src="img/about-2.jpg" alt=" " />{" "}
              </div>
              <div class="about-desc">
                <h3>Lawn Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
