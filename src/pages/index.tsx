import { NextPage } from "next";
import { Container, Button, Typography, Box, Card, TextField, MenuItem, Grid } from '@mui/material';
import {
  MainLayout,
  SectionLayout,
  CarouselMain,
  CarouselDoctors,
  ServiceItem,
  IServiceItem,
  Checkup,
  ICheckup,
  CarouselReviews,
  CarouselNews,
} from "@/shared/ui";

const serviceItems: IServiceItem[] = [
  {
    image: '/page-main/icon-02.png',
    title: 'Стоматология',
    text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
  },
  {
    image: '/page-main/icon-01.png',
    title: 'Кардиология',
    text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
  },
  {
    image: '/page-main/icon-03.png',
    title: 'Неврология',
    text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
  },
  {
    image: '/page-main/icon-04.png',
    title: 'Офтмальмология',
    text: 'Lorem ipsum dolor sit  amet, ad vix fuisset adicit lobortis',
  },
]

const checkups: ICheckup[] = [
  {
    image: 'https://placehold.co/900',
    name: 'dental',
    price: 150,
    points: ['1 test asdasd asd', '2 test test', '3 test', '4 test test test test'],
    link: 'adasd'
  },
  {
    image: 'https://placehold.co/900',
    name: 'dental2',
    price: 200,
    points: ['3 Departments', '15 Test', '15 Emergency', 'No Medical Assisdance'],
    link: 'adasd'
  },
  {
    image: 'https://placehold.co/900',
    name: 'dental3',
    price: 300,
    points: ['1 test asdasd asd', '2 test test', '3 test', '4 test test test test'],
    link: 'adasd'
  },
]

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Box sx={{ pb: { xs: 3, md: 5 } }}>
        <Container>
          <CarouselMain />
        </Container>
      </Box>
      <Box sx={{ py: { xs: 3, md: 5 } }} className="bg-[#F5F8F9]">
        <Container>
          <Grid container spacing={3} alignItems={"center"}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '3rem' } }}>
                Почему пациенты выбирают нашу клинику?
              </Typography>
              <Typography sx={{ my: { xs: 2, md: 4 } }}>
                Dr Linda Freemanis one of the best in, In the world, In the Galaxy. There are many variations of passages of Lorem available, but the have suffered alteration in some form, by injected humour.
              </Typography>
              <Button variant="contained" sx={{ mb: { xs: 3, md: 0 } }}>Learn more</Button>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} offset={{ xs: 0, md: 1 }}>
              <Grid container spacing={{ xs: 0, md: 0 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'end' },
                    pr: { xs: 0, md: 3 },
                    gap: 2
                  }}>
                    {serviceItems.filter((_, i) => i < 2).map(item => (
                      <ServiceItem key={item.title} {...item} />
                    ))}
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 2, md: 0 } }}>
                  <Box sx={{
                    pt: { xs: 0, md: 5 },
                    mt: { xs: 0, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    gap: 2
                  }}>
                    {serviceItems.filter((_, i) => i >= 2).map(item => (
                      <ServiceItem key={item.title} {...item} />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <SectionLayout title="Наши чекапы">
        <Grid container spacing={3} alignItems={"center"}>
          {checkups.map((checkup, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={checkup.name} sx={{
              '&:nth-of-type(2)': {
                transform: { xs: 'none', md: 'scaleY(1.1)' }
              },
            }}>
              <Checkup {...checkup} />
            </Grid>
          ))}
        </Grid>
      </SectionLayout>
      <SectionLayout title="Наши доктора">
        <CarouselDoctors />
      </SectionLayout>
      <SectionLayout title="Записаться на прием">
        <Card sx={{
          py: { xs: 3, md: 10 },
          px: { xs: 2, md: 0 },
          border: '1px solid rgba(133, 150, 167, 0.36)',
          boxShadow: 'none',
          borderRadius: { xs: '10px', md: '20px' }
        }}>
          <Grid container alignItems="center">
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="https://placehold.co/900"
                sx={{
                  width: '100%',
                  borderRadius: '0 var(--border-radius) var(--border-radius) 0',
                  objectFit: 'cover'
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} sx={{ px: { xs: 2, md: 5 } }}>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <div>
                    <Box component="label" sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '30px', color: '#585858' }}>
                      ФИО <Box component="span" sx={{ color: 'red' }}>*</Box>
                    </Box>
                    <TextField size="small" fullWidth sx={{ mb: 2, background: 'rgba(var(--input-bg), .15)' }} />
                  </div>
                  <div>
                    <Box component="label" sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '30px', color: '#585858' }}>
                      Доктор <Box component="span" sx={{ color: 'red' }}>*</Box>
                    </Box>
                    <TextField select size="small" fullWidth sx={{ mb: 2, background: 'rgba(var(--input-bg), .15)' }}>
                      {['Гинеколог', 'Невролог', 'Педиатр'].map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <Box component="label" sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '30px', color: '#585858' }}>
                      Дата приема <Box component="span" sx={{ color: 'red' }}>*</Box>
                    </Box>
                    <TextField type="date" size="small" fullWidth sx={{ mb: 2, background: 'rgba(var(--input-bg), .15)' }} />
                  </div>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <div>
                    <Box component="label" sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '30px', color: '#585858' }}>
                      Дата рождения <Box component="span" sx={{ color: 'red' }}>*</Box>
                    </Box>
                    <TextField type="date" size="small" fullWidth sx={{ mb: 2, background: 'rgba(var(--input-bg), .15)' }} />
                  </div>
                  <div>
                    <Box component="label" sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '30px', color: '#585858' }}>
                      Телефон <Box component="span" sx={{ color: 'red' }}>*</Box>
                    </Box>
                    <TextField size="small" fullWidth sx={{ mb: 2, background: 'rgba(var(--input-bg), .15)' }} />
                  </div>
                  <div>
                    <Box component="label" sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '30px', color: '#585858' }}>
                      Email
                    </Box>
                    <TextField size="small" fullWidth sx={{ mb: 2, background: 'rgba(var(--input-bg), .15)' }} />
                  </div>
                </Grid>
                <Button variant="contained" sx={{ width: { xs: '100%', md: 'auto' } }}>Создать запись</Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </SectionLayout>
      <SectionLayout title="Отзывы" container={false}>
        <CarouselReviews />
      </SectionLayout>
      <SectionLayout title="Наши новости" container={false} mobilePadding>
        <Box sx={{
          marginLeft: {
            xs: '0',
            md: 'calc((100% - min(90%, 70.5rem))/2)'
          },
          overflow: 'hidden'
        }}>
          <CarouselNews />
        </Box>
      </SectionLayout>
      <Box component="section" sx={{ height: { xs: '300px', md: '450px' } }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11625.100768565688!2d44.8098561!3d43.245654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3f5e856b63c4858!2z0JfQtNC-0YDQvtCy0YzQtSDQv9C70Y7RgQ!5e0!3m2!1sru!2sru!4v1673267497613!5m2!1sru!2sru"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </MainLayout>
  );
}

export default HomePage;
