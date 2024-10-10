//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
//⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️
//____________________________________________________________________
import React, { useState } from "react"
import { Box, Button, Typography, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import InputField from "@/components/InputField/InputField"
import PlanCard from "./components/PlanCard"
import { useAppSelector } from "@/app/hooks"
import { LANGUAGES } from "@/constants/languages"

const SignUp = () => {
  const { languageSelected } = useAppSelector(state => state.languages)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    plan: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <Box
      sx={{
        maxWidth: "75%",
        margin: "auto",
        padding: "2rem",
        backgroundColor: "#1E1E1E",
        borderRadius: "0.5rem",
      }}
    >
      <Typography variant="h5" align="center" color="#EAEAEA">
        {LANGUAGES[languageSelected].createAccountPage.title}
      </Typography>
      <form onSubmit={handleSubmit}>
        <InputField
          label={LANGUAGES[languageSelected].createAccountPage.formLabels.name}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <InputField
          label={
            LANGUAGES[languageSelected].createAccountPage.formLabels.lastName
          }
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <InputField
          label={
            LANGUAGES[languageSelected].createAccountPage.formLabels.companyName
          }
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          label={LANGUAGES[languageSelected].createAccountPage.formLabels.email}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Typography
          color="#EAEAEA"
          sx={{ marginTop: "2rem", marginBottom: "1rem" }}
        >
          {LANGUAGES[languageSelected].createAccountPage.subscriptionText}
        </Typography>
        <Grid container spacing={2}>
          {LANGUAGES[
            languageSelected
          ].createAccountPage.formLabels.accountPlans.map(plan => (
            <PlanCard
              key={plan.title}
              plan={plan}
              selected={formData.plan}
              onClick={() =>
                setFormData({ ...formData, plan: plan.title.toLowerCase() })
              }
            />
          ))}
        </Grid>

        <Button
          disabled={!formData.plan}
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ marginTop: "2rem" }}
        >
          {LANGUAGES[languageSelected].createAccountPage.createButton}
        </Button>
      </form>
      <Typography align="center" color="#B0B0B0" sx={{ marginTop: "1rem" }}>
        {LANGUAGES[languageSelected].createAccountPage.alreadyHaveAnAccount}{" "}
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#00bcd4",
            fontWeight: "bold",
          }}
        >
          {LANGUAGES[languageSelected].createAccountPage.login}
        </Link>
      </Typography>
    </Box>
  )
}

export default SignUp
