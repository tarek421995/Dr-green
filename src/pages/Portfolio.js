import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio">
                <div class="container">
                    <div class="section-title text-center center">
                        <h2>Project Gallery</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <div class="categories">
                        <ul class="cat">
                            <li>
                                <ol class="type">
                                    <li><a href="#" data-filter="*" class="active">All</a></li>
                                    <li><a href="#" data-filter=".lawn">Lawn Care</a></li>
                                    <li><a href="#" data-filter=".garden">Garden Care</a></li>
                                    <li><a href="#" data-filter=".planting">Planting</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="row">
                        <div class="portfolio-items">
                            <div class="col-sm-6 col-md-4 lawn">
                                <div class="portfolio-item">
                                    <div class="hover-bg"> <a href="img/portfolio/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/01-small.jpg" class="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 planting">
                                <div class="portfolio-item">
                                    <div class="hover-bg"> <a href="img/portfolio/02-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/02-small.jpg" class="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 lawn">
                                <div class="portfolio-item">
                                    <div class="hover-bg"> <a href="img/portfolio/03-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/03-small.jpg" class="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 lawn">
                                <div class="portfolio-item">
                                    <div class="hover-bg"> <a href="img/portfolio/04-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/04-small.jpg" class="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 planting">
                                <div class="portfolio-item">
                                    <div class="hover-bg"> <a href="img/portfolio/05-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/05-small.jpg" class="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 garden">
                                <div class="portfolio-item">
                                    <div class="hover-bg"> <a href="img/portfolio/06-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text">
                                            <h4>Dolor Sit</h4>
                                        </div>
                                        <img src="img/portfolio/06-small.jpg" class="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 garden">
                                <div class="portfolio-item">
                                    <div class="hover-bg"> <a href="img/portfolio/07-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text">
                                            <h4>Dolor Sit</h4>
                                        </div>
                                        <img src="img/portfolio/07-small.jpg" class="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 lawn">
                                <div class="portfolio-item">
                                    <div class="hover-bg"> <a href="img/portfolio/08-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/08-small.jpg" class="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 planting">
                                <div class="portfolio-item">
                                    <div class="hover-bg"> <a href="img/portfolio/09-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/09-small.jpg" class="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Portfolio;