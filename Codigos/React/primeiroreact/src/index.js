import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStateProvider } from './GlobalState';
import FormularioGlobal from './components/formulario/FormularioGlobal';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
  <GlobalStateProvider>
      <FormularioGlobal></FormularioGlobal>
   </GlobalStateProvider>
   </React.StrictMode>,
  document.getElementById('root')
  

);


