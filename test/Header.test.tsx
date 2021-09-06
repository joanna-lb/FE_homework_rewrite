import React from "react";
import {screen} from "@testing-library/react";
import {render} from'./test.utils'
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Header from "../src/components/Header/Header";
import  "@babel/core/lib/gensync-utils/async";
import App from "../src/App";

describe('Header', () => {
   test('should find header component with test id',()=>{
     render(<Header/>)
     expect(screen.getByTestId('header-bar')).toBeInTheDocument()
   })

  test('should show profile when click image',()=>{
    render(<Header/>)
    const button=screen.getByRole('button');
    userEvent.click(button)
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
