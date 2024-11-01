import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Visualizar from "./pages/visualizar.jsx";
import Atualizar from "./pages/atualizar.jsx";
import Deletar from "./pages/deletar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },

  {
    path: "/visualizar",
    element: <Visualizar />,
    
  },

  {
    path: "/deletar",
    element: <Deletar />,
    
  },

  {
    path: "/atualizar",
    element: <Atualizar />,
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)//** */
