import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './routers/Expenses/index.tsx'
import Invoices from './routers/Invoices/index.tsx'
import NotFound from './routers/NotFound/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  </StrictMode>
);
