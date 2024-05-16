import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hookcontext from './comp/Hookcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hookcontext>
      <App/>
    </Hookcontext>
  </React.StrictMode>,
)
