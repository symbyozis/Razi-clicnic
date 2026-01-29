import React from 'react';
import Slider from "react-slick";

import Doctor, { IDoctor } from "../../Cards/Doctor";

export const CarouselDoctors: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slides: IDoctor[] = [
        {
            id: 1,
            image: 'https://placehold.co/900',
            name: 'Муэз Хадиджа',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
            link: 'test',
            position: 'ЛОР-врач',
        },
        {
            id: 2,
            image: 'https://placehold.co/900',
            name: 'Эбреолидзе Ираклий',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
            position: 'Невролог',
            link: 'test1',
        },
        {
            id: 3,
            image: 'https://placehold.co/900',
            name: 'Хачукаева Заира',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
            position: 'Кардиолог',
            link: 'test2',
        }
    ]
    return (
        <Slider {...settings}>
            {slides.map(slide => (
                <Doctor key={slide.id} {...slide} />
            ))}
        </Slider>
    );
}

