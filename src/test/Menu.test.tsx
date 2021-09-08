import React from "react";
import {screen, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom'
import Menu from "../components/Menu/Menu";
import '@testing-library/jest-dom/extend-expect'
// @ts-ignore
import {render} from './test.utils'
import {BrowserRouter, Route} from "react-router-dom";

describe('Menu', () => {
  test('should contain left bar items in the web', async () => {
    render(<BrowserRouter>
      <Route component={Menu}/>
    </BrowserRouter>)
    expect(await screen.getByText(/DASHBOARD/i)).toBeInTheDocument()
  })
})
