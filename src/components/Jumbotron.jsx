import { Box, Typography, Button } from "@mui/material"

export const Jumbotron = () => {
    return (
        <Box sx={{ backgroundColor: "gray", marginTop: "16px" }}>
            <Typography>
                A Warm Welcome!
            </Typography>
            <Button variant="contained">CTA</Button>
        </Box>
    )
}