// ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
// ⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️
// ____________________________________________________________________
import { FreeBreakfast, Payment, Star } from "@mui/icons-material"

const PORTUGUESE_ACCOUNT_PLANS = [
  {
    title: "Grátis",
    icon: <FreeBreakfast fontSize="large" />,
    features: [
      "Acesso a funcionalidades básicas",
      "Suporte comunitário",
      "Limite de usuários: 1",
    ],
  },
  {
    title: "Básico",
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

const PORTUGUESE_CREATE_ACCOUNT_FORM = {
  name: "Nome",
  lastName: "Sobrenome",
  companyName: "Nome da Empresa",
  email: "E-mail",
  accountPlans: PORTUGUESE_ACCOUNT_PLANS,
}

export const PORTUGUESE_CREATE_ACCOUNT_PAGE = {
  title: "Criar Conta",
  formLabels: PORTUGUESE_CREATE_ACCOUNT_FORM,
  subscriptionText: "Escolha um Plano de Assinatura: ",
  alreadyHaveAnAccount: "Já tem uma conta?",
  login: "Login",
  createButton: "Criar Conta",
}
