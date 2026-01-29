import React from 'react';
import {Box, Container, Typography} from "@mui/material";

interface ISectionLayoutProps {
    title: string,
    children: React.ReactNode,
    container?: boolean
}

const SectionLayout: React.FC<ISectionLayoutProps> = (props) => {
    const { title, children, container = true } = props
    return (
        <Box sx={{ py: 6 }}>
            <Container sx={{ mb: 10 }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        fontSize: 36,
                        color: 'var(--heading-color)',
                        '&::before': {
                            content: '""',
                            clear: 'both',
                            display: 'table',
                            height: '3px',
                            width: '50px',
                            backgroundColor: 'var(--primary-color)',
                            margin: '0 auto 4px'
                        }
                    }}
                >
                    {title}
                </Typography>
            </Container>
            {container
              ? <Container>{children}</Container>
              : <Box>{children}</Box>
            }
        </Box>
    )
};

export default SectionLayout;
