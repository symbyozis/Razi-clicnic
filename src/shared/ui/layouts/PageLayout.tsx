import React from 'react'
import {Box, Breadcrumbs, Container, Typography, Link} from "@mui/material";

export default function PageLayout({ title, children }: {
    children: React.ReactNode;
    title: string,
}) {
    return (
        <>
            <Box sx={{
                py: 12,
                background: "linear-gradient(90deg, rgba(245,250,253,1) 0%, rgba(223,242,243,1) 50%, rgba(200,228,232,1) 100%)"
            }}>
                <Container>
                    <Typography
                        variant="h1"
                        sx={{ marginBottom: '15px' }}
                    >
                        {title}
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: '14px' }} color="secondary">
                        <Link underline="hover" color="primary" href="/">
                            Главная
                        </Link>
                        <Typography sx={{ fontSize: '14px'}}>{title}</Typography>
                    </Breadcrumbs>
                </Container>
            </Box>
            {children}
        </>
    )
}
