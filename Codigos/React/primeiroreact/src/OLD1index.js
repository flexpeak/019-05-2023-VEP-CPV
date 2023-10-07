import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStateProvider } from './GlobalState';
import FormularioGlobal from './components/formulario/FormularioGlobal';
import FormularioCEP from './components/formulario/FormularioCEP';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
  <GlobalStateProvider>
      <FormularioGlobal/>
      <FormularioCEP/>
   </GlobalStateProvider>
   </React.StrictMode>
  

);


