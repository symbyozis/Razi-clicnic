import React from 'react';
import Slider from "react-slick";

import { Typography, Button, Box, Grid } from "@mui/material";

type TSlide = {
    image: string
    title: string
    text: string
    link: string
}

export const CarouselMain: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slides: TSlide[] = [
        {
            image: 'https://placehold.co/900',
            title: 'Uncompromising excellence. Commitment to care.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
            link: 'test',
        },
        {
            image: 'https://placehold.co/900',
            title: 'Your Community Hospital Providing Generations of Caring',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
            link: 'test1',
        },
        {
            image: 'https://placehold.co/900',
            title: 'World class care right where you need it ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
            link: 'test2',
        }
    ]
    return (
        <Slider {...settings}>
            {slides.map(slide => (
                <Box key={slide.title}>
                    <Grid container alignItems="center" spacing={3}>
                        <Grid size={{ md: 4 }}>
                            <Typography variant="h1">{slide.title}</Typography>
                            <Typography sx={{ my: 3 }}>{slide.text}</Typography>
                            <Button variant="contained" href={slide.link}>Make Appointment</Button>
                        </Grid>
                        <Grid size={{ md: 8 }}>
                            <figure
                                className="w-full bg-no-repeat bg-cover bg-center h-[76vh] min-h-[500px] rounded-[20px]"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Slider>
    );
}

