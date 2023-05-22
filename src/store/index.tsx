import React, { ReactNode } from 'react'
import { createStore, Provider, useDispatch } from 'react-reduce-hooks'
import { wrapWithDevtools, initDevtools } from 'reduce-devtools-extension'
import reducer from './reducers'
import { State } from './types'

type Props = {
  state: State
  children: ReactNode
}

export const state: State = {
  users: undefined
}

const AppProvider = ({ state, children }: Props) => {
  const [store, dispatch] = createStore(wrapWithDevtools(reducer), state)
  initDevtools(store, dispatch)

  return (
    <Provider store={store} dispatch={dispatch}>
      {children}
    </Provider>
  )
}

export { AppProvider as Provider, useDispatch }
