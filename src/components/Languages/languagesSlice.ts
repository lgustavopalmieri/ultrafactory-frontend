//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
//⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️ 
//____________________________________________________________________
import { LanguagesType } from "@/constants/languages"
import { createSlice } from "@reduxjs/toolkit"

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("languageSelected")
  return savedLanguage ? savedLanguage : "english"
}

interface InitialStateInterface {
  languageSelected: LanguagesType
}

const initialState: InitialStateInterface = {
  languageSelected: getInitialLanguage() as LanguagesType,
}

export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.languageSelected = action.payload
      localStorage.setItem("languageSelected", action.payload)
    },
  },
})

export const { setLanguage } = languagesSlice.actions

export default languagesSlice.reducer
