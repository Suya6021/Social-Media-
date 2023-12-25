
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './globals.css'
import App from './App'
import { QueryProvider } from './lib/react-query/QueryProvider'
import AuthProvider from './Context/AuthContext'
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  
    <BrowserRouter>
       <QueryProvider>
        <AuthProvider>
           <App />
         </AuthProvider>
       </QueryProvider>
    </BrowserRouter> 
    
  
)
