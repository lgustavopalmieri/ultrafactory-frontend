// ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
// ⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️
// ____________________________________________________________________
import { TextField } from "@mui/material"
import * as React from "react"

interface IInputFieldProps {
  type?: React.InputHTMLAttributes<unknown>["type"]
  label: string
  name: string
  value: any
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  required: boolean
}

const InputField: React.FunctionComponent<IInputFieldProps> = ({
  type,
  label,
  name,
  value,
  onChange,
  required,
}: IInputFieldProps) => (
  <TextField
    fullWidth
    type={type}
    variant="outlined"
    margin="normal"
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
    sx={{
      backgroundColor: "#2B2B2B",
      color: "#EAEAEA",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#00bcd4",
        },
        "&:hover fieldset": {
          borderColor: "#008ba3",
        },
      },
    }}
  />
)

export default InputField
