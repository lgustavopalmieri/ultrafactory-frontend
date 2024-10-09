import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test} from "vitest"
import Testando from "./Testando"

describe("Testando", () => {
  test("Should render Testando component", () => {
    const { debug, getByText } = render(<Testando/>)

    debug()

    expect(getByText("Working!")).toBeInTheDocument()
  })
})