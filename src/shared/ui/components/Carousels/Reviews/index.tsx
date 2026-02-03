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
		dotsClass: "slick-dots slick-thumb",
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					dots: false
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
		<Box>
			<Grid container spacing={3} alignItems="center">
				<Grid
					size={{ xs: 12, md: 7 }}
					sx={{
						order: { xs: 1, md: 2 },
						position: 'relative',
						paddingBottom: { xs: '50px', md: 0 }
					}}
				>
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
										minHeight: { xs: 300, md: 420 },
										height: { xs: 300, md: 420 },
										objectFit: 'cover',
										padding: '0 5px',
									}}
								>
								</Box>
							</div>
						))}
					</Slider>
				</Grid>

				<Grid
					size={{ xs: 12, md: 5 }}
					sx={{
						order: { xs: 3, md: 1 }
					}}
				>
					<Slider
						{...settings}
						ref={sliderRef => setSlider(sliderRef ?? undefined)}
					>
						{reviews.map(review => (
							<Box
								key={review.id}
								sx={{
									textAlign: { xs: 'center', md: 'right' },
									px: { xs: 2, md: 0 }
								}}
							>
								<Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
									{review.name}
								</Typography>
								<Typography variant="h6" sx={{ color: '#8596A7', mt: 1, mb: { xs: 2, md: 4 }, fontSize: { xs: '1rem', md: '1.25rem' } }}>
									{review.department}
								</Typography>
								<Typography sx={{ fontSize: { xs: 13, md: 14 } }}>
									{review.text}
								</Typography>
							</Box>
						))}
					</Slider>
				</Grid>
			</Grid>
		</Box>
	)
}

export default CarouselReviews;
