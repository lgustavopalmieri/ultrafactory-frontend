//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
//⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️
//____________________________________________________________________

import { Box, Grid, Paper, Typography } from "@mui/material"
import React from "react"

interface IAccountPlan {
  title: string
  icon: React.ReactElement
  features: string[]
}

interface IPlanCardProps {
  plan: IAccountPlan
  selected: string
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

const PlanCard: React.FunctionComponent<IPlanCardProps> = ({
  plan,
  selected,
  onClick,
}) => {
  return (
    <Grid item xs={12} sm={4} key={plan.title}>
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          backgroundColor:
            selected === plan.title.toLowerCase()
              ? "rgba(204, 85, 0, 0.2)" // Cor turquesa com opacidade baixa
              : "#2A2A2A", // Cor padrão para cards não selecionados
          color: "#EAEAEA",
          textAlign: "left",
          cursor: "pointer",
          minHeight: "15rem",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor:
              selected === plan.title.toLowerCase()
                ? "rgba(255, 255, 255, 0.2)" // Um leve aumento na opacidade ao passar o mouse
                : "#333333", // Sutil mudança ao passar o mouse sobre cards não selecionados
          },
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            "& svg": {
              color:
                selected === plan.title.toLowerCase() ? "#00bcd4" : "#00bcd4", // Turquesa puro para ícones selecionados
              fontSize: "2rem",
            },
          }}
        >
          {plan.icon}
          <Typography variant="h6" gutterBottom sx={{ marginLeft: "1rem" }}>
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
  )
}

export default PlanCard
