import React from "react";
import {screen, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../src/App";
import '@testing-library/jest-dom/extend-expect'
// @ts-ignore
import {render} from './test.utils'


describe('App', () => {
  test('should render todo list', async () => {
    render(<App/>)

    const listItems = await screen.getAllByRole('listitem')
    expect(listItems.length).toBe(17);
  })
})
