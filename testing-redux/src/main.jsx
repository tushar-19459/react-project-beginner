import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ContextProvider } from './context/Context.jsx'
import { Provider } from 'react-redux'
import cart from './store/index.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={cart}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </BrowserRouter>
)
