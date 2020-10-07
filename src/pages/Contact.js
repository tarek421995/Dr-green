import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div id="contact" class="text-center">
        <div class="container">
          <div class="section-title text-center">
            <h2>Contact Us</h2>
            <hr />
            <p>
              send us your comment to email and we will responed as soon as
              posiable
            </p>
          </div>
          <div class="col-md-10 col-md-offset-1 contact-info">
            <div class="col-md-4">
              <h3>Address</h3>
              <hr />
              <div class="contact-item">
                <p> syria,</p>
                <p>Damascus, masaken barzeh</p>
              </div>
            </div>
            <div class="col-md-4">
              <h3>Working Hours</h3>
              <hr />
              <div class="contact-item">
                <p>Monday-Saturday: 07:00 - 18:00</p>
                <p>Sunday: CLOSED</p>
              </div>
            </div>
            <div class="col-md-4">
              <h3>Contact Info</h3>
              <hr />
              <div class="contact-item">
                <p>Phone: +963993587879</p>
                <p>Email: tarek421995@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-md-offset-2">
            <h3>Leave us a message</h3>
            <form name="sentMessage" id="contactForm" novalidate>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      id="name"
                      class="form-control"
                      placeholder="Name"
                      required="required"
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Email"
                      required="required"
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
                <p class="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" class="btn btn-custom btn-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
