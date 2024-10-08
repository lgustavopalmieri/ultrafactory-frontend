import { Box, Button, Typography, Container, Grid, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import InsightsIcon from "@mui/icons-material/Insights"
import SpeedIcon from "@mui/icons-material/Speed"

interface IInitialPageProps {}

// feature/ULT0001-account-page
// should refactor initial page componentising InitialPage
// should create an create account page with an form
// and ultrafactory plans to be enrolled.
// should coding also the backend

const InitialPage: React.FunctionComponent<IInitialPageProps> = props => {
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
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontFamily: "Montserrat, Arial", fontWeight: "bold" }}
        >
          Ultrafactory
        </Typography>

        <Typography variant="h6" color="textSecondary" paragraph>
          Equipment Effectiveness and Monitoring Insights
        </Typography>

        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Effortlessly manage your manufacturing processes with real-time
          insights, advanced analytics to improve productivity.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <SpeedIcon fontSize="large" color="secondary" />
              <Typography variant="h6" gutterBottom>
                Real-time Monitoring
              </Typography>
              <Typography variant="body2">
                Get live updates on all your processes to stay ahead and make
                fast decisions.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsightsIcon fontSize="large" color="secondary" />
              <Typography variant="h6" gutterBottom>
                Advanced Analytics
              </Typography>
              <Typography variant="body2">
                Analyze performance data and track key metrics to boost
                efficiency.
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
            to="/signup"
            sx={{ mb: 2, width: "100%" }}
          >
            Create Account
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            size="large"
            component={Link}
            to="/login"
            sx={{ width: "100%" }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default InitialPage
