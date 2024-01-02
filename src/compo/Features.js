import React from 'react'

const Features = () => {
    return (
        <div>
            <section class="featured">
                <div class="container">
                    <div class="heading">
                        <h3>our services</h3>
                        <h2>Our Featured Services</h2>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col-sm-12 col-md-6 col-xl-4">
                            <div class="featured-card">
                                <img src="images/analytics.png" style={{width: "55px" , height: "55.2px"}} />
                                <h3>Marketing Analysis</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam velit,
                                    perspiciatis dolores nulla quod.</p>
                                <a href="#" class="btn-n">Read More</a>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-xl-4">
                            <div class="featured-card">
                                <img src="images/email.png" style={{width: "55px", height: "55.2px"}} />
                                <h3>Email Marketing</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates sapiente quis
                                    tempore ad exercitationem.</p>
                                <a href="#" class="btn-n">Read More</a>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-xl-4">
                            <div class="featured-card">
                                <img src="images/research.png" style={{width: "55px", height: "55.2px"}} />
                                <h3>Website Optimization</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quae expedita minus maxime,
                                    vero iste? how we do</p>
                                <a href="#" class="btn-n">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
