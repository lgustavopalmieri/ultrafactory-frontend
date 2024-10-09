import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import Button from "./Button"
import {
  Link,
  MemoryRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom"

const buttonTestID = "button"

describe("Button", () => {
  test("Should render button", () => {
    const handleClick = vi.fn()
    const { getByTestId } = render(
      <Button onClick={handleClick} text="Button" />,
    )
    expect(getByTestId(buttonTestID)).toBeInTheDocument()
  })

  test("Should render based on children prop", () => {
    const handleClick = vi.fn()
    const { getByTestId } = render(
      <Button onClick={handleClick} text="Button" />,
    )
    expect(getByTestId(buttonTestID)).toHaveTextContent("Button")
  })

  test("Should fire an event on button click", () => {
    const handleClick = vi.fn()
    const { getByTestId } = render(
      <Button onClick={handleClick} text="Button" />,
    )
    fireEvent.click(getByTestId(buttonTestID))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // test("Should navigate to the login page", () => {
  //   const handleClick = () => <Link to="/login" />
  //   const { getByTestId } = render(
  //     <Button onClick={handleClick} text="Button" />,
  //   )
  //   fireEvent.click(getByTestId(buttonTestID))
  //   expect(handleClick).toHaveBeenCalledTimes(1)
  // })
  test("Should navigate to the login page", () => {
    const TestComponent = () => {
      const navigate = useNavigate()

      const handleClick = () => {
        navigate("/login")
      }

      return <Button onClick={handleClick} text="Button" />
    }
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<TestComponent />} />
          <Route
            path="/login"
            element={<div data-testid="login-page">Login page</div>}
          />
        </Routes>
      </MemoryRouter>,
    )
    fireEvent.click(getByTestId(buttonTestID))
    expect(getByTestId("login-page")).toBeInTheDocument()
  })
})
