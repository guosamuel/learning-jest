import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from "@testing-library/react";
// import "jest-dom/extend-expect";
import Counter from './Counter'

afterEach(cleanup)

const startingState = {count: 0};

function reducer(state = startingState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}

function renderWithRedux(component, { initialState, store = createStore(reducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

it("renders with redux", () => {
  const { getByTestId, getByText } = renderWithRedux(<Counter />)
})
