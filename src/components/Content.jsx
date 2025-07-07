import { Grid, Box } from "@mui/material"

import { BasicCard } from "./Card"
import { Jumbotron } from "./Jumbotron"

export const Content = () => {
    return (
        <Box>
            <Jumbotron />
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 3 }} >
                    <BasicCard />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <BasicCard />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <BasicCard />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                    <BasicCard />
                </Grid>
            </Grid>
        </Box>
    )
}