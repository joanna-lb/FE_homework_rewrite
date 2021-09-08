import React from "react";
import {screen} from "@testing-library/react";
import {render} from './test.utils'
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Footer from "../components/Footer/Footer";
import "@babel/core/lib/gensync-utils/async";


describe('Footer', () => {
  test('should find footer words on footer component', () => {
    render(<Footer/>)
    expect(screen.getByText(/2017/i)).toBeInTheDocument()
  })
})

