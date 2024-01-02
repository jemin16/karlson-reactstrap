import React from 'react'

const Explorer = () => {
    return (
        <div>
            <section class="Explorers">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <img src="images/about-img1.png" alt="about" class="about" />
                        </div>
                        <div class="col-sm-12">
                            <div class="explorers-box">
                                <h3>about us</h3>
                                <h2>We Are Digital Explorers</h2>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive
                                    customer experience are the heart of successful communication. No fake products and
                                    services. The customer is king, their lives and needs are the inspiration.</p>
                                <div class="Check-list d-flex fix">
                                    <ul class="p-5">
                                        <li><i class="fa-solid fa-check"></i> Recommender systems</li>
                                        <li><i class="fa-solid fa-check"></i> Omnichannel analytics</li>
                                        <li><i class="fa-solid fa-check"></i> Dedicated Developers</li>
                                    </ul>
                                    <ul class="p-5">
                                        <li><i class="fa-solid fa-check"></i> Demand Prediction</li>
                                        <li><i class="fa-solid fa-check"></i> Lead grneration</li>
                                        <li><i class="fa-solid fa-check"></i> 24/7 support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Explorer
