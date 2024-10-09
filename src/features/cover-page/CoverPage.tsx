import { Box, Button, Typography, Container, Grid, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import InsightsIcon from "@mui/icons-material/Insights"
import SpeedIcon from "@mui/icons-material/Speed"
import Languages from "@/components/Languages/Languages"
import { useAppSelector } from "@/app/hooks"
import { LANGUAGES } from "@/constants/languages"

// feature/ULT0001-account-page
// should refactor initial page componentising CoverPage
// should create an create account page with an form
// and ultrafactory plans to be enrolled.
// should coding also the backend

const CoverPage: React.FunctionComponent = () => {
  const { languageSelected } = useAppSelector(state => state.languages)
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Box sx={{ position: "absolute", top: 16, right: 16 }}>
          <Languages />
        </Box>

        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontFamily: "Montserrat, Arial", fontWeight: "bold" }}
        >
          {LANGUAGES[languageSelected].coverPage.title}
        </Typography>

        <Typography variant="h6" color="textSecondary" paragraph>
          {LANGUAGES[languageSelected].coverPage.subtitle}
        </Typography>

        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          {LANGUAGES[languageSelected].coverPage.brief}
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <SpeedIcon fontSize="large" color="secondary" />
              <Typography variant="h6" gutterBottom>
                {LANGUAGES[languageSelected].coverPage.leftCard.title}
              </Typography>
              <Typography variant="body2">
                {LANGUAGES[languageSelected].coverPage.leftCard.brief}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsightsIcon fontSize="large" color="secondary" />
              <Typography variant="h6" gutterBottom>
                {LANGUAGES[languageSelected].coverPage.rightCard.title}
              </Typography>
              <Typography variant="body2">
                {LANGUAGES[languageSelected].coverPage.rightCard.brief}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/create-account"
            sx={{ mb: 2, width: "100%" }}
          >
            {LANGUAGES[languageSelected].coverPage.createAccountButton}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            size="large"
            component={Link}
            to="/login"
            sx={{ width: "100%" }}
          >
            {LANGUAGES[languageSelected].coverPage.logInButton}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default CoverPage
