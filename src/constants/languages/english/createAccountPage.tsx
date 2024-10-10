//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
//⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️
//____________________________________________________________________
import { FreeBreakfast, Payment, Star } from "@mui/icons-material"

const ENGLISH_ACCOUNT_PLANS = [
  {
    title: "Free",
    icon: <FreeBreakfast fontSize="large" />,
    features: [
      "Access to basic features",
      "Community support",
      "User limit: 1",
    ],
  },
  {
    title: "Basic",
    icon: <Star fontSize="large" />,
    features: [
      "Access to advanced features",
      "Priority support",
      "User limit: up to 5",
    ],
  },
  {
    title: "Premium",
    icon: <Payment fontSize="large" />,
    features: [
      "Access to all features",
      "Dedicated 24/7 support",
      "User limit: up to 15",
    ],
  },
]

const ENGLISH_CREATE_ACCOUNT_FORM = {
  name: "Name",
  lastName: "Last Name",
  companyName: "Company Name",
  email: "Email",
  accountPlans: ENGLISH_ACCOUNT_PLANS,
}

export const ENGLISH_CREATE_ACCOUNT_PAGE = {
  title: "Create Account",
  formLabels: ENGLISH_CREATE_ACCOUNT_FORM,
  subscriptionText: "Choose a Subscription Plan: ",
  alreadyHaveAnAccount: "Already have an account?",
  login: "Login",
  createButton: "Create Account",
}
