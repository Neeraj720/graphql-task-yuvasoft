import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ApolloProvider } from '@apollo/client'
import client from './redux/apollo/client.js'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
