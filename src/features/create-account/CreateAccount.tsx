//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
//⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️
//____________________________________________________________________
import React, { useState } from "react"
import { Box, Button, Typography, Grid, Paper } from "@mui/material"
import { FreeBreakfast, Star, Payment } from "@mui/icons-material"
import { Link } from "react-router-dom"
import InputField from "@/components/InputField/InputField"

const plans = [
  {
    title: "Free",
    icon: <FreeBreakfast fontSize="large" />,
    features: [
      "Acesso a funcionalidades básicas",
      "Suporte comunitário",
      "Limite de usuários: 1",
    ],
  },
  {
    title: "Basic",
    icon: <Star fontSize="large" />,
    features: [
      "Acesso a funcionalidades avançadas",
      "Suporte prioritário",
      "Limite de usuários: até 5",
    ],
  },
  {
    title: "Premium",
    icon: <Payment fontSize="large" />,
    features: [
      "Acesso a todas as funcionalidades",
      "Suporte dedicado 24/7",
      "Limite de usuários: até 15",
    ],
  },
]

const SignUp = () => {
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
        Criar Conta
      </Typography>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Nome"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          label="Sobrenome"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          label="Nome da Empresa"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <InputField
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Typography
          color="#EAEAEA"
          sx={{ marginTop: "2rem", marginBottom: "1rem" }}
        >
          Escolha um Plano de Assinatura:
        </Typography>
        <Grid container spacing={2}>
          {plans.map(plan => (
            <Grid item xs={12} sm={4} key={plan.title}>
              <Paper
                elevation={3}
                sx={{
                  padding: "2rem",
                  backgroundColor:
                    formData.plan === plan.title.toLowerCase()
                      ? "rgba(204, 85, 0, 0.2)" // Cor turquesa com opacidade baixa
                      : "#2A2A2A", // Cor padrão para cards não selecionados
                  color: "#EAEAEA",
                  textAlign: "left",
                  cursor: "pointer",
                  minHeight: "15rem",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor:
                      formData.plan === plan.title.toLowerCase()
                        ? "rgba(255, 255, 255, 0.2)" // Um leve aumento na opacidade ao passar o mouse
                        : "#333333", // Sutil mudança ao passar o mouse sobre cards não selecionados
                  },
                }}
                onClick={() =>
                  setFormData({ ...formData, plan: plan.title.toLowerCase() })
                }
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                    "& svg": {
                      color:
                        formData.plan === plan.title.toLowerCase()
                          ? "#00bcd4"
                          : "#00bcd4", // Turquesa puro para ícones selecionados
                      fontSize: "2rem",
                    },
                  }}
                >
                  {plan.icon}
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ marginLeft: "1rem" }}
                  >
                    {plan.title}
                  </Typography>
                </Box>
                <ul style={{ paddingLeft: "1rem" }}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ marginTop: "2rem" }}
        >
          Criar Conta
        </Button>
      </form>
      <Typography align="center" color="#B0B0B0" sx={{ marginTop: "1rem" }}>
        Já tem uma conta?{" "}
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#00bcd4",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>
      </Typography>
    </Box>
  )
}

export default SignUp
