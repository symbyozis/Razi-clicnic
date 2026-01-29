import React from 'react';
import Slider from "react-slick";
import { Box, Typography, Grid } from "@mui/material";

const CarouselReviews = () => {
	const [sliderNav, setSliderNav] = React.useState<Slider | undefined>(undefined);
	const [slider, setSlider] = React.useState<Slider | undefined>(undefined);

	const settingsNav = {
		autoplay: true,
		draggable: true,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		asNavFor: slider || undefined,
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 485,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		],
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		asNavFor: sliderNav || undefined,
	}

	const reviews = [
		{
			id: 1,
			image: 'https://placehold.co/900',
			name: 'Зухра Сурхоева',
			department: 'Кардиология',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 2,
			image: 'https://placehold.co/900',
			name: 'Зарета Оздоева',
			department: 'Хирургия',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 3,
			image: 'https://placehold.co/900',
			name: 'Лейла Куштова',
			department: 'Неврология',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 4,
			image: 'https://placehold.co/900',
			name: 'Рая Костоева',
			department: 'Терапия',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 5,
			image: 'https://placehold.co/900',
			name: 'Марет Галаева',
			department: 'Терапия',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
		{
			id: 6,
			image: 'https://placehold.co/900',
			name: 'Алина Галаева',
			department: 'Педиатрия',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores autem cum deleniti dolorem ea eos hic ipsum magnam magni minima, natus neque nostrum obcaecati optio pariatur sapiente similique ullam.\n'
		},
	]
	return (
		<Grid container spacing={3} alignItems="center">
			<Grid size={{ md: 5 }}>
				<Slider
					{...settings}
					ref={sliderRef => setSlider(sliderRef ?? undefined)}
				>
					{reviews.map(review => (
						<Box
							key={review.id}
							sx={{
								textAlign: 'right'
							}}
						>
							<Typography variant="h4">
								{review.name}
							</Typography>
							<Typography variant="h6" sx={{ color: '#8596A7', mt: 1, mb: 4 }}>
								{review.department}
							</Typography>
							<Typography sx={{ fontSize: 14 }}>
								{review.text}
							</Typography>
						</Box>
					))}
				</Slider>
			</Grid>
			<Grid size={{ md: 7 }}>
				<Slider
					{...settingsNav}
					ref={sliderNavRef => setSliderNav(sliderNavRef ?? undefined)}
				>
					{reviews.map(review => (
						<div className="imageWrap" key={review.id}>
							<Box
								src={review.image}
								component="img"
								sx={{
									width: '100%',
									borderRadius: 'var(--border-radius)',
									minHeight: 420,
									objectFit: 'cover',
									padding: '0 5px',
								}}
							>
							</Box>
						</div>
					))}
				</Slider>
			</Grid>
		</Grid>
	)
}

export default CarouselReviews;
