import React from 'react';
import ReactDOM from 'react-dom/client';
//import Caixa from './caixa/Caixa';
//import EscolhaCor from './caixa/EscolhaCor';
import AppEscolhaCor from './caixa/AppEscolhaCor';
//import Lista from './components/lista/Lista';
//import AppListaCompras from './components/listaCompras/AppListaCompras';
//import DadosPessoais from './components/dadosPessoais/DadosPessoais';
//import Texto from './components/texto/Texto';
//import Botao from './components/botao/Botao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Lista></Lista>
    <AppListaCompras></AppListaCompras>
    <DadosPessoais nome={'Raiy'} dados={{sobrenome:'Sylva', idade:42}}></DadosPessoais> */}
    {/* <Caixa classCSS = {'vermelho'}></Caixa>
    <Caixa classCSS = {'verde'}></Caixa>
    <Caixa classCSS = {'azul'}></Caixa>
    <Caixa></Caixa> */}
    {/* <EscolhaCor></EscolhaCor> */}
    <AppEscolhaCor></AppEscolhaCor>
  </> 
);


