import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx';
import {Toaster} from 'sonner';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster position="top-right" richColors/>
  </BrowserRouter>
)
