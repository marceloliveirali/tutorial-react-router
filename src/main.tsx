import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './routers/Expenses/index.tsx'
import Invoices from './routers/Invoices/index.tsx'
import NotFound from './routers/NotFound/index.tsx'
import Invoice from './routers/Invoices/Invoice/index.tsx'
import InvoiceIndex from './routers/Invoices/InvoicesIndex/index.tsx'
import AppGoodMorning from './routers/AppGoodMorning/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AppGoodMorning />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/invoices" element={<Invoices />}>
            <Route index element={<InvoiceIndex />} />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>    
    </BrowserRouter>
  </StrictMode>
);
