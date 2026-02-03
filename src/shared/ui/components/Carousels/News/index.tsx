import React from 'react';
import Slider from "react-slick";
import { Box, Typography, Grid } from "@mui/material";

import styles from './news.module.scss'

const CarouselNews = () => {
	const [slider, setSlider] = React.useState<Slider | null>(null);

	// React.useEffect(() => {
	// 	fetch('https://api.telegram.org/bot7439302368:AAEy0XmJAMyDqtsKEZZxHuMISB7DJkiyQAQ/getUpdates')
	// },[])

	const settings = {
		dots: false,
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		variableWidth: false,
		adaptiveHeight: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					appendDots: (dots: any) => (
						<Box
							component="div"
							sx={{
								position: 'absolute',
								bottom: '-50px',
								width: '100%',
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
						</Box>
					)
				}
			}
		],
	}

	const items = [
		{
			id: 1,
			image: 'https://placehold.co/900',
			title: 'Зухра Сурхоева',
			createdAt: '2024-06-13T23:03:01.633Z',
		},
		{
			id: 2,
			image: 'https://placehold.co/900',
			title: 'Зарета Оздоева',
			createdAt: '2024-06-13T23:03:01.633Z',
		},
		{
			id: 3,
			image: 'https://placehold.co/900',
			title: 'Лейла Куштова',
			createdAt: '2024-06-13T23:03:01.633Z',
		},
		{
			id: 4,
			image: 'https://placehold.co/900',
			title: 'Рая Костоева',
			createdAt: '2024-06-13T23:03:01.633Z',
		},
		{
			id: 5,
			image: 'https://placehold.co/900',
			title: 'Марет Галаева',
			createdAt: '2024-06-13T23:03:01.633Z',
		},
		{
			id: 6,
			image: 'https://placehold.co/900',
			title: 'Алина Галаева',
			createdAt: '2024-06-13T23:03:01.633Z',
		},
	]
	return (
		<Box sx={{
			width: '100%',
			position: 'relative',
			paddingBottom: { xs: '50px', md: 0 },
			'& .slick-list': {
				margin: '0 -10px'
			},
			'& .slick-slide': {
				padding: '0 10px'
			}
		}}>
			<Slider
				{...settings}
			>
				{items.map(item => (
					<Box
						key={item.id}
					>
						<Box
							component="figure"
							className="imageWrap"
							sx={{
								outline: 'none',
								height: { xs: '250px', md: '320px' },
								maxHeight: '400px',
								borderRadius: '26px',
								overflow: 'hidden',
								background: `url(${item.image}) no-repeat center`,
								backgroundSize: 'cover',
								margin: 0
							}}
						>
							<Box
								sx={{
									background: 'rgba(0, 0, 0, 0.3)',
									display: 'flex',
									alignItems: 'end',
									width: '100%',
									height: '100%'
								}}
							>
								<Box
									component="figcaption"
									sx={{
										padding: { xs: '0 20px 15px 20px', md: '0 40px 20px 40px' },
										width: '100%',
										color: 'white'
									}}
								>
									<Typography>
										{/*{new Date().toLocaleDateString()}*/}
									</Typography>
									<Typography variant="h6" sx={{ mb: 1, fontSize: { xs: '1rem', md: '1.25rem' } }}>
										{item.title}
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Slider>
		</Box>
	)
}

export default CarouselNews;
