import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12">
                        <h4 className="footer-title">
                            Links: 
                        </h4>
                        <ul className="footer-links">
                            <li>
                                <Link className="footer-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/restaurant">Restaurant</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/rooms">Rooms</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/apps">Apps</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/readme">ReadMe</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <h4 className="footer-title">
                            Contacts:
                        </h4>
                        <ul className="footer-links">
                            <li>
                                <a 
                                    href="http://www.google.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer-link"
                                >
                                    <i className="fas fa-map-marker-alt"></i> Country, State, City, Street, 234a
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="tel:+380000000000" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer-link"
                                >
                                    <i className="fas fa-phone-alt"></i> +380000000000
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="http://www.telegram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer-link"
                                >
                                    <i className="fab fa-telegram-plane"></i> telegram
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="http://www.viber.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"  
                                    className="footer-link"
                                >
                                    <i className="fab fa-viber"></i> viber
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <h4 className="footer-title">
                            Social:
                        </h4>
                        <ul className="footer-links">
                            <li><a 
                                    href="http://www.youtube.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer-link"
                                >
                                    <i className="fab fa-youtube"></i> YouTube
                                </a></li>
                            <li><a 
                                    href="http://www.facebook.com"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer-link"
                                >
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </a></li>
                            <li><a 
                                    href="http://www.instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer-link"
                                >
                                    <i className="fab fa-instagram"></i> Instagram
                                </a></li>
                            <li><a 
                                    href="http://www.twitter.com"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer-link"
                                >
                                    <i className="fab fa-twitter"></i> Twitter
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="text-center footer-copyright">
                            &copy; copyright 2020.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
