import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div class="container text-center">
          <div class="col-md-8 col-md-offset-2">
            <div class="social">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <p>
              &copy; 220 Dr green. Designed by{" "}
              <a
                href="https://www.facebook.com/profile.php?id=100006173021417"
                rel="nofollow"
              >
                Tarek Eesa
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
