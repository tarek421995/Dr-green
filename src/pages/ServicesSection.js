import React, { Component } from 'react';

class ServicesSection extends Component {
    render() {
        return (
            <div id="services">
                <div class="container">
                    <div class="col-md-10 col-md-offset-1 section-title text-center">
                        <h2>Our Services</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <div class="row">
                        <div class="col-md-3 text-center">
                            <div class="service-media"> <img src="img/services/service-1.jpg" alt=" " /> </div>
                            <div class="service-desc">
                                <h3>Lawn Care</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <div class="service-media"> <img src="img/services/service-2.jpg" alt=" " /> </div>
                            <div class="service-desc">
                                <h3>Landscape Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <div class="service-media"> <img src="img/services/service-3.jpg" alt=" " /> </div>
                            <div class="service-desc">
                                <h3>Tree Care</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <div class="service-media"> <img src="img/services/service-4.jpg" alt=" " /> </div>
                            <div class="service-desc">
                                <h3>Spring & Fall Cleanup</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ServicesSection;