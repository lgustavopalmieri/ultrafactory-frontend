import { Button as MaterialButton } from "@mui/material"

interface IButtonProps {
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FunctionComponent<IButtonProps> = ({
  text,
  onClick,
}: IButtonProps) => (
  <MaterialButton
    data-testid="button"
    variant="outlined"
    color="secondary"
    size="large"
    sx={{ width: "100%" }}
    onClick={onClick}
  >
    {text}
  </MaterialButton>
)

export default Button
