import React, { Component } from 'react'

export default class MobileSection extends Component {
    state = {
        mobile: [
            {
                expr: "adipisicing elit. Explicabo eveniet possimus quam dignissimos accusantium sit at dolor fugiat atque. Excepturi autem quam officia natus."
            },
            {
                expr: "vorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt est iusto, dolores rem vero quo voluptatibus soluta illo."
            },
            {
                expr: "lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at officiis inventore"
            },
            {
                expr: "consectetur adipisicing elit. Laboriosam, magni dolorum"
            },
            {
                expr: "ipsum dolor sit amet consectetur adipisicing elit. Deserunt est iusto, dolores rem vero quo voluptatibus soluta illo."
            },
            {
                expr: "lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at officiis inventore"
            },
            {
                expr: "consectetur adipisicing elit. Laboriosam, magni dolorum"
            }
        ]
    }
    render() {
        return (
            <section className="section section-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">

                            <img 
                                src="assets/img/mobile.jpg" 
                                className="mobile-photo" 
                                alt="phone" 
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <h4 className="left-title dark mobile">
                                mobile app
                            </h4>
                            <div className="mobile-list">
                                {this.state.mobile.map((item, index) => {
                                    return <div className="mobile-item" key={index}>
                                        <p className="mobile-expr">
                                            <i className="fas fa-check"></i> 
                                            {item.expr}
                                        </p>
                                    </div>
                                })}
                            </div>
                            <div className="download__wrapper">
                                <a href="http://www.google.com" className="download-link">
                                    <img 
                                        src="assets/img/apple-app-store.svg" 
                                        alt="app-store" 
                                        className="download-logo"
                                    />
                                </a>
                                <a href="http://www.google.com" className="download-link">
                                    <img 
                                        src="assets/img/google-play.png" 
                                        alt="google-play" 
                                        className="download-logo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
