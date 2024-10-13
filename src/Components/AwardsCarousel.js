import React from 'react';
import Slider from "react-slick";
import './AwardsCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AwardsCarousel({ language }) { 
    const awards = [
        { id: 1, image: require('../Assets/AACR.png') },
        { id: 2, image: require('../Assets/Abret.png') },
        { id: 3, image: require('../Assets/Accreditation.gif') },
        { id: 4, image: require('../Assets/BFHI.jpg') },
        { id: 5, image: require('../Assets/CAP.png') },
        { id: 6, image: require('../Assets/CarF.png') },
        { id: 7, image: require('../Assets/CBAHI.png') },
        { id: 8, image: require('../Assets/CenteredCare.png') },
        { id: 9, image: require('../Assets/CT_Blue.png') },
        { id: 10, image: require('../Assets/ECRI.jpg') },
        { id: 11, image: require('../Assets/ISO.png') },
        { id: 12, image: require('../Assets/ISOCompany.png') },
        { id: 13, image: require('../Assets/ISOFood.png') },
        { id: 14, image: require('../Assets/JOINT.png') },
        { id: 15, image: require('../Assets/SSH.png') },
        { id: 16, image: require('../Assets/USGBC.png') },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="awards-carousel">
            <hr />
            <h2>{language === 'ar' ? 'الإعتمادات والجوائز' : 'Accreditations and Awards'}</h2>
            <Slider {...settings}>
                {awards.map((award) => (
                    <div key={award.id}>
                        <img src={award.image} alt={award.title} style={{ width: "100%" }} />
                        <p>{award.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AwardsCarousel;
