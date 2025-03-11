import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'
import { Provider } from 'react-redux'

const container = document.getElementById('root')
const root = createRoot(container)
import { store } from './store'

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
