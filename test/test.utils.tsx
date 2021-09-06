import React, {FC, ReactElement} from "react";
import {render as rtlRender} from "@testing-library/react";
import '@testing-library/jest-dom'
import {Provider} from "react-redux";
import agentReducer from "../src/redux/reducer";
import {createStore} from "redux";

function render(
  ui: ReactElement,
  {
    // preloadedState:any,
    store = createStore(agentReducer),
    ...renderOptions
  } = {}
) {
  const Wrapper: FC = ({children}) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}


export * from '@testing-library/react'
// override render method
export {render}
