import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="hero_area">
            {/* header section strats */}
            <header className="header_section">
                <div className="container"></div>
            </header>
            {/* end header section */}
            {/* slider section */}
            <section className=" slider_section position-relative">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="slider_item-box">
                                <div className="slider_item-container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="slider_item-detail">
                                                    <div>
                                                        <h1>
                                                            Welcome to <br />
                                                            Our Fruits Shop
                                                        </h1>
                                                        <p>
                                                        Freeze drying fruit is a process used to preserve fresh produce so it will be shelf-stable and last longer without preservatives. The goal of freeze-drying fruit is to preserve its nutritional profile. Freeze-dried fruit can be used as a healthy snack, to add sweetness to dishes, and in baking.
                                                        </p>
                                                        <div className="d-flex">
                                                            <Link
                                                                to="/catalog"
                                                                className="text-uppercase custom_orange-btn mr-3"
                                                            >
                                                                Shop Now
                                                            </Link>
                                                            <Link
                                                                to="/contacts"
                                                                className="text-uppercase custom_dark-btn"
                                                            >
                                                                Contact Us
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="slider_img-box">
                                                    <div>
                                                        <img
                                                            src="images/slide-img.png"
                                                            alt=""
                                                            className=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="slider_item-box">
                                <div className="slider_item-container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="slider_item-detail">
                                                    <div>
                                                        <h1>
                                                            Our Services
                                                        </h1>
                                                        <p>
                                                        We offer a wide range of freeze-dried fruits, which you can view at the link below
                                                        </p>
                                                        <div className="d-flex">
                                                            <Link
                                                                to="/service"
                                                                className="text-uppercase custom_orange-btn mr-3"
                                                            >
                                                                Read More
                                                            </Link>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="slider_img-box">
                                                    <div>
                                                        <img
                                                            src="images/_MG_1272-2.png"
                                                            alt=""
                                                            className=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="custom_carousel-control">
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* end slider section */}
        </div>
    );
}
