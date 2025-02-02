import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="jumbotron jumbotron-fluid" id="banner" style={{backgroundImage:'url(img/banner-bk.jpg);'}}>
        <div className="container text-center text-md-left">
            <header>
                <div className="row justify-content-between">
                    <div className="col-2">
                        <img src="img/logo.png" alt="logo"/>
                    </div>
                    <div className="col-6 align-self-center text-right">
                        <a href="#" className="text-white lead">Get Early Access</a>
                    </div>
                </div>
            </header>
            <h1 data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="display-3 text-white font-weight-bold my-5">
            	A New Way<br/>
            	To Start Business
            </h1>
            <p data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="lead text-white my-4">
                Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico mentitum duo.
                <br/> Illum iusto laoreet his te. Lorem partiendo mel ex. Ad vitae admodum voluptatum per.
            </p>
            <a href="#" data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="btn my-4 font-weight-bold atlas-cta cta-green">Get Started</a>
        </div>
    </div>
    <div className="container my-5 py-2">
        <h2 className="text-center font-weight-bold my-5">Smartest protection for your site</h2>
        <div className="row">
            <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center">
                <img src="img/smart-protect-1.jpg" alt="Anti-spam" className="mx-auto"/>
                <h4>Anti-spam</h4>
                <p>Lorem ipsum dolor sit amet porro his no his deleniti</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center">
                <img src="img/smart-protect-2.jpg" alt="Phishing Detect" className="mx-auto"/>
                <h4>Phishing Detect</h4>
                <p>Ne error antiopam usu. Sed vocen concludaturque ea</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center">
                <img src="img/smart-protect-3.jpg" alt="Smart Scan" className="mx-auto"/>
                <h4>Smart Scan</h4>
                <p>Et usu ocurreret elaboraret doctus prodesse assueverit.</p>
            </div>
        </div>
    </div>
    <div className="jumbotron jumbotron-fluid feature" id="feature-first">
        <div className="container my-5">
            <div className="row justify-content-between text-center text-md-left">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="col-md-6">
                    <h2 className="font-weight-bold">Take a look inside</h2>
                    <p className="my-4">Te iisque labitur eos, nec sale argumentum scribentur no,
                        <br/> augue disputando in vim. Erat fugit sit at, ius lorem deserunt deterruisset no.</p>
                    <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</a>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="col-md-6 align-self-center">
                    <img src="img/feature-1.png" alt="Take a look inside" className="mx-auto d-block"/>
                </div>
            </div>
        </div>
    </div>
    <div className="jumbotron jumbotron-fluid feature" id="feature-last">
        <div className="container">
            <div className="row justify-content-between text-center text-md-left">
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="col-md-6 flex-md-last">
                    <h2 className="font-weight-bold">Safe and reliable</h2>
                    <p className="my-4">
                        Duo suas detracto maiestatis ad, commodo lucilius invenire nec ad,
                        <br/> eum et oratio disputationi. Falli lobortis his ad
                    </p>
                    <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</a>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="col-md-6 align-self-center flex-md-first">
                    <img src="img/feature-2.png" alt="Safe and reliable" className="mx-auto d-block"/>
                </div>
            </div>
        </div>
    </div>

    <div className="container my-5 py-2" id="price-table">
        <h2 className="text-center font-weight-bold d-block mb-3">Check our pricing</h2>
        <div className="row">
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5">
                <h4 className="my-4">STARTUP</h4>
                <p className="font-weight-bold">$ <span className="display-2 font-weight-bold">0</span> / MO.</p>
                <ul className="list-unstyled">
                    <li>Up to 5 Documents</li>
                    <li>Up to 3 Reviews</li>
                    <li>5 team Members</li>
                    <li>Limited Support</li>
                </ul>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-ghost">Get Free</a>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5 rounded" id="price-table__premium">
                <h4 className="my-4">PREMIUM</h4>
                <p className="font-weight-bold">$ <span className="display-2 font-weight-bold">10</span> / MO.</p>
                <ul className="list-unstyled">
                    <li>Up to 15 Documents</li>
                    <li>Up to 10 Reviews</li>
                    <li>25 team Members</li>
                    <li>Limited Support</li>
                </ul>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-green">Get Free</a>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5">
                <h4 className="my-4">PROFESSIONAL</h4>
                <p className="font-weight-bold">$ <span className="display-2 font-weight-bold">30</span> / MO.</p>
                <ul className="list-unstyled">
                    <li>Unlimited Documents</li>
                    <li>Unlimited Reviews</li>
                    <li>Unlimited Members</li>
                    <li>Unlimited Support</li>
                </ul>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-ghost">Get Free</a>
            </div>
        </div>
    </div>
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="img/client-1.png" className="mx-auto d-block"/>
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="img/client-2.png" className="mx-auto d-block"/>
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="img/client-3.png" className="mx-auto d-block"/>
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="img/client-4.png" className="mx-auto d-block"/>
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="img/client-5.png" className="mx-auto d-block"/>
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="img/client-6.png" className="mx-auto d-block"/>
                </div>
            </div>
        </div>
    </div>
    <div className="jumbotron jumbotron-fluid" id="contact"  style={{backgroundImage:' url(img/contact-bk.jpg);'}}>
        <div className="container my-5">
            <div className="row justify-content-between">
                <div className="col-md-6 text-white">
                    <h2 className="font-weight-bold">Contact Us</h2>
                    <p className="my-4">
                        Te iisque labitur eos, nec sale argumentum scribentur,
                        <br/> augue disputando in vim. Erat fugit sit at, ius lorem.
                    </p>
                    <ul className="list-unstyled">
                        <li>Email : company_email@com</li>
                        <li>Phone : 361-688-5824</li>
                        <li>Address : 4826 White Avenue, Corpus Christi, Texas</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <form>
                    	<div className="row">
	                        <div className="form-group col-md-6">
	                            <label htmlFor="name">Your Name</label>
	                            <input type="name" className="form-control" id="name"/>
	                        </div>
	                        <div className="form-group col-md-6">
	                            <label htmlFor="Email">Your Email</label>
	                            <input type="email" className="form-control" id="Email"/>
	                        </div>
	                    </div>
	                    <div className="form-group">
	                        <label htmlFor="message">Message</label>
	                        <textarea className="form-control" id="message" rows={3}></textarea>
	                    </div>
                        <button type="submit" className="btn font-weight-bold atlas-cta atlas-cta-wide cta-green my-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

	<div className="jumbotron jumbotron-fluid" id="copyright">
        <div className="container">
            <div className="row justify-content-between">
            	<div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
                    Copyright © 2018 Chen, Yi-Ya.
                </div>
                <div className="col-md-6 align-self-center text-center text-md-right my-2" id="social-media">
                    <a href="#" className="d-inline-block text-center ml-2">
                    	<i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="d-inline-block text-center ml-2">
                    	<i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="d-inline-block text-center ml-2">
                    	<i className="fa fa-medium" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="d-inline-block text-center ml-2">
                    	<i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  
</>
  );
}

export default App;
