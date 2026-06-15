import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap'

//Bootstrap icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css'

import './styles/index.css'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />


)
