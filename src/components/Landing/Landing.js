import React, { Component } from 'react';
import { Link, Location } from 'react-router-dom';
import Progress from '../../components/common/Progress';
import './Landing.css';

import Blank from '../../hoc/layouts/Blank';

class Landing extends Component {

    render() {
        const test = {
            zIndex: 100
        };

        return (
            <Blank>
                <div id="page-top" className="landing-page no-skin-config pace-done white-bg">
                    <Progress/>
                    <div className="navbar-wrapper">
                        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                            <div className="container">
                                <div className="navbar-header page-scroll">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <Link to="/register" className="navbar-brand">REGISTER</Link>
                                </div>
                                <div id="navbar" className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/home" className="page-scroll" href="#page-top">Home</Link></li>
                                        <li><Link to="/login" className="page-scroll" href="#page-top">Login</Link></li>
                                        <li><a className="page-scroll" href="#features">How It Works</a></li>
                                        <li><a className="page-scroll" href="#pricing">Pricing</a></li>
                                        <li><a className="page-scroll" href="#team">Register</a></li>
                                        <li><a className="page-scroll" href="#testimonials">Testimonials</a></li>
                                        <li><a className="page-scroll" href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div id="inSlider" className="carousel carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#inSlider" data-slide-to="0" className="active"></li>
                            <li data-target="#inSlider" data-slide-to="1"></li>
                            <li data-target="#inSlider" data-slide-to="2"></li>

                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1>Lorem Ipsum<br/>
                                            dolor, sit amet,<br/>
                                            consectetur adipiscing elit<br/>
                                            This is Grocery List Plus</h1>
                                        <p>Lorem Ipsum is simply dummy text used for illustration.</p>
                                        <p>
                                            <a className="btn btn-lg btn-primary" href="#" role="button">READ MORE</a>
                                        </p>
                                    </div>
                                    <div className="carousel-image wow zoomIn">
                                        <img src={ require("../../assets/img/laptop.gif")} alt="laptop"/>
                                    </div>
                                </div>

                                <div className="header-back one"></div>

                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="carousel-caption blank">
                                        <h1>We create meaningful <br/> interfaces that inspire.</h1>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                    </div>
                                </div>

                                <div className="header-back two"></div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <div className="carousel-caption blank">
                                        <h1>We create meaningful <br/> interfaces that inspire.</h1>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                    </div>
                                </div>

                                <div className="header-back three"></div>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#inSlider" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#inSlider" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <section id="features" className="container services">
                        <div className="row">
                            <div className="col-sm-3">
                                <h2>Create Grocery Lists</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                                <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
                            </div>
                            <div className="col-sm-3">
                                <h2>Sync With Your Phone</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                                <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
                            </div>
                            <div className="col-sm-3">
                                <h2>Auto-Generated Lists</h2>

                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                                <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
                            </div>
                            <div className="col-sm-3">
                                <h2>Import Recipes</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                                <p><a className="navy-link" href="#" role="button">Details &raquo;</a></p>
                            </div>
                        </div>
                    </section>

                    <section  className="container features">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="navy-line"></div>
                                <h1>Over 40+ unique view<br/> <span className="navy"> with many custom components</span> </h1>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 text-center wow fadeInLeft">
                                <div>
                                    <i className="fa fa-mobile features-icon"></i>
                                    <h2>Full responsive</h2>
                                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                                </div>
                                <div className="m-t-lg">
                                    <i className="fa fa-bar-chart features-icon"></i>
                                    <h2>6 Charts Library</h2>
                                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                                </div>
                            </div>
                            <div className="col-md-6 text-center  wow zoomIn">
                                <img src={require("../../assets/img/perspective.png")} alt="dashboard" className="img-responsive" />
                            </div>
                            <div className="col-md-3 text-center wow fadeInRight">
                                <div>
                                    <i className="fa fa-envelope features-icon"></i>
                                    <h2>Mail pages</h2>
                                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                                </div>
                                <div className="m-t-lg">
                                    <i className="fa fa-google features-icon"></i>
                                    <h2>AngularJS version</h2>
                                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="navy-line"></div>
                                <h1>Discover great feautres</h1>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
                            </div>
                        </div>
                        <div className="row features-block">
                            <div className="col-lg-6 features-text wow fadeInLeft">
                                <small>INSPINIA</small>
                                <h2>Perfectly designed </h2>
                                <p>INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.</p>
                                <a href="" className="btn btn-primary">Learn more</a>
                            </div>
                            <div className="col-lg-6 text-right wow fadeInRight">
                                <img src={require("../../assets/img/dashboard.png")} alt="dashboard" className="img-responsive pull-right" />
                            </div>
                        </div>
                    </section>

                    <section id="team" className="gray-section team">
                        <div className="container">
                            <div className="row m-b-lg">
                                <div className="col-lg-12 text-center">
                                    <div className="navy-line"></div>
                                    <h1>Our Team</h1>
                                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 wow fadeInLeft">
                                    <div className="team-member">
                                        <img src={require("../../assets/img/avatar3.jpg")} className="img-responsive img-circle img-small" alt="" />
                                        <h4><span className="navy">Amelia</span> Smith</h4>
                                        <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus. </p>
                                        <ul className="list-inline social-icon">
                                            <li><a href="#"><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="team-member wow zoomIn">
                                        <img src={require("../../assets/img/avatar1.jpg")} className="img-responsive img-circle" alt="" />
                                        <h4><span className="navy">John</span> Novak</h4>
                                        <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>
                                        <ul className="list-inline social-icon">
                                            <li><a href="#"><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4 wow fadeInRight">
                                    <div className="team-member">
                                        <img src={require("../../assets/img/avatar2.jpg")} className="img-responsive img-circle img-small" alt="" />
                                        <h4><span className="navy">Peter</span> Johnson</h4>
                                        <p>Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.</p>
                                        <ul className="list-inline social-icon">
                                            <li><a href="#"><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </Blank>
        )
    }

}

export default Landing;