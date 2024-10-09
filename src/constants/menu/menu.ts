import { LANGUAGES, LanguagesType } from "../languages"

export const MENU_BUTTONS = (language: LanguagesType ) => {
  return [
    {
      path: "/home",
      title: LANGUAGES[language].menu.home,
    },
  ]
}
