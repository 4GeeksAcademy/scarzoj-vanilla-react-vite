import { Button, Container, Grid, Paper, Typography } from "@mui/material"
import { BasicCard } from "../components/Card"

export const LandingPage = () => {
    return (
        <>
            <Container>
                <Container>
                    <Typography>Hello</Typography>
                    <Button>CTA</Button>
                </Container>
                <Container>
                    <Grid container spacing={1}>
                        <Grid size={4}>
                            <BasicCard></BasicCard>
                        </Grid>
                        <Grid size={4}>
                            <BasicCard></BasicCard>
                        </Grid>
                        <Grid size={4}>
                            <BasicCard></BasicCard>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </>
    )
}