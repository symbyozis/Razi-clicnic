import React from 'react'
import { NextPage } from "next";
import { PageLayout } from "@/shared/ui";
import { Grid } from "@mui/material";
import {
    Box, Button,
    Container,
    FormControl,
    List,
    ListItem,
    TextField,
    Typography
} from "@mui/material";
import appConfig from '@/shared/config/app.config.json'
import { phoneFormat } from "@/shared/lib";


const Contacts: NextPage = () => {
    const { contacts } = appConfig
    return (
        <PageLayout title="Документы">
            <Container>
                <Box
                    sx={{
                        padding: '100px 0',
                    }}
                >
                    asdas
                </Box>
            </Container>
        </PageLayout>
    )
}

export default Contacts;
