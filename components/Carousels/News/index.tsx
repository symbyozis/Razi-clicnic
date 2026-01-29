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
		<Grid container px={{ display: 'block' }}>
			<Slider
				{...settings}
			>
				{items.map(item => (
					<Box
						sx={{
							padding: '0 5px'
						}}
						key={item.id}
					>
						<Box
							component="figure"
							className="imageWrap"
							sx={{
								outline: 'none',
								height: '320px',
								maxHeight: '400px',
								borderRadius: '26px',
								overflow: 'hidden',
								background: `url(${item.image}) no-repeat center`,

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
										padding: '0 40px 20px 40px',
										width: '100%',
										color: 'white'
									}}
								>
									<Typography>
										{/*{new Date().toLocaleDateString()}*/}
									</Typography>
									<Typography variant="h6" sx={{ mb: 1 }}>
										{item.title}
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Slider>
		</Grid>
	)
}

export default CarouselNews;
