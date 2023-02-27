/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const StyledHomeBanner = styled.div`
    .div-banner {
.banner {
    height: 750px;
}


    }
    .slick-dots {
    display: none !important;
    background-color: white !important;
    
}
.slick-dots ul{
    margin: 0 !important;
}
`


class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            appendDots: dots => (
                <div>
                    <ul style={{ margin: "-100px -80% 0 0" }}> {dots} </ul>
                </div>
            ),

        };
        return (
            <StyledHomeBanner className="div-banner">

                <Slider {...settings}>
                    <div>
                        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/choose-to-move-all-sports-hp-masthead-fallback-d_tcm337-799677.jpg" alt="bannerTree" className="banner" />
                    </div>
                    <div>
                        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/choose-to-move-all-sports-hp-masthead-fallback-d_tcm337-799677.jpg" alt="bannerTree" className="banner" />
                    </div>
                    <div>
                        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/choose-to-move-all-sports-hp-masthead-fallback-d_tcm337-799677.jpg" alt="bannerTree" className="banner" />
                    </div>
                </Slider>
            </StyledHomeBanner>
        );
    }
}


export default HomeBanner;