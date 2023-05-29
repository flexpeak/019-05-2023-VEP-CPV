# React Router
Para alterarmos de página na nossa aplicação React sem que haja recarregamento de página e assim construirmos nosso SPA, precisaremos de um módulo chamado ``react-router-dom``. Portanto vamos instalá-lo

````sh
npm install react-router-dom
````

Precisamos entender três conceitos do React Router para configurá-lo:
### BrowserRouter
Qual será a parte da nossa aplicação React que será alterada ao mudar de páginas.
### Routes
Será onde nós definiremos as rotas da nossa aplicação
### Route
Será uma rota específica, onde configuraremos o endpoint, parametros, qual componente será renderizado e etc.

## Criando Rotas

Para começarmos a trabalhar com rotas é recomendado separarmos os nossos componentes das nossas páginas, por isso vamos criar uma pasta chamada ``pages`` dentro da pasta ``src`` do nosso projeto. Vamos, incialmente, criar dois componentes que serão páginas da nossa aplicação.

 ``pages/Home.js``
 ````js
 import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
 ````
 
 ``pages/About.js``
 ````js
 import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About
 ````
 
 Agora vamos fazer uso do ``react-router-dom`` dentro de nosso arquivo ``App.js``.
 
 ``src/App.js``
 ````js
 import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className='app'>
      <h1>Minha Aplicação React</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
      <h2>Rodapé da Minha Aplicação</h2>
    </div>
  );
}

export default App;
 ````
 
 Ao acessar ``http://localhost:3000`` estaremos renderizando o componente ``Home`` e ao acessar ``http://localhost:3000/about`` estaremos renderizando o componente ``About``. No componente ``Route``, a prop ``path`` é a URL da nossa rota, enquanto a prop ``element`` é qual componente será renderizado ao acessar a específica rota. 

## Navegação Entre Rotas
Para navegar entre páginas não utilizaremos a tag ``a`` do HTML, pois ela faz recarregar nossa página perdendo assim o conceito de SPA. Precisaremos utilizar a tag ``Link``, disponível no ``react-router-dom``.

``App.js``
````js
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className='app'>
      <h1>Minha Aplicação React</h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/about">Sobre</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
      <h2>Rodapé da Minha Aplicação</h2>
    </div>
  );
}

export default App;
````

O atributo ``to`` do ``Link`` representa para qual rota o usuário irá ser redirecionado ao clicar no link. 

## Passagem de Parâmetros entre Rotas
Para passarmos parâmetros nas rotas precisaremos fazer uso da seguinte sintaxe no elemento ``Route`` e atributo ``path``: ``:nome_do_parametro``. Por exemplo, vamos supor que precisaremos criar uma rota onde passaremos o ID de um usuário, a rota ficaria parecido com:

``App.js``
````js
import User from './pages/User';

// ...

<Route path="/user/:id" element={<User />}/>
````

Agora se acessarmos ``http://localhost:3000/user/1`` nós conseguiremos renerizar o componente ``User``. Para receber esse parâmetro dentro do componente, precisaremos de um Hook do React Router chamado ``useParams``. Exemplo:

``src/pages/User`` 
````js
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  return (
    <div>
        <h1>Visualizando dados do usuário: { id }</h1>
    </div>
  )
}

export default User
````

## Query Params
Além de pegar parâmetros nas rotas com o ``useParams``, podemos pegar também os parametros com o ``useSearchParams``, a diferença é que os parametros com o ``Query Seach`` são passados como query params, por exemplo na rota ``http://localhost:3000/user/1/?status=ativo``, o parametro do ``useParams`` será o ``id=1`` enquanto o parametro do ``Search Params`` será o ``status=ativo``.

## Erro de Página Não Encontrada - 404
Para definirmos uma página de erro 404, precisaremos criar uma rota com o ``path`` asterisco.

``App.js``
````js
<Route path="*" element={<Error404 />}/>
````

## Redirecionamento de Rota
Constantemente precisaremos redirecionar o usuário de rota dinamicamente, a partir de alguma ação, por exemplo. Para isso faremos uso do hook ``useNavigate`` do React Routes. Exemplo no código abaixo redirecionaremos o usuário caso o parâmetro de id não seja um número. 

``pages/User.js``
````js
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (isNaN(id)) { 
        navigate('/404')
      }
  }, [])

  return (
    <div>
        <h1>Visualizando dados do usuário: { id }</h1>
    </div>
  )
}

export default User
````

# LocalStorage
A funcionalidade do localStorage consiste em salvar, adicionar, recuperar ou excluir dados localmente em um navegador Web, esta informação é guardada na forma de pares de chave-valor e os valores podem ser apenas strings.

Através do navegador é possível testar alguns dos principais métodos do armazenamento local, são estes:

### localStorage.setItem(chave, valor):
Armazena um item com a chave e o valor.
### localStorage.getItem(chave):
Recupera o valor do item com o nome da chave.
### localStorage.removeItem(chave):
Remove o item com chave do localStorage.

Os valores ficam salvos mesmo se o usuário recarregar a página, fechar e abrir o navegador e até mesmo se reiniciar o computador. 

Exemplo de uso:

``App.js``
````js
import { useState } from 'react';

function App() {
  const nomeSalvo = localStorage.getItem('user')
  const [user, setUser] = useState(nomeSalvo) 

  const handleChangeUser = () => {
    const novoNome = prompt("Digite o novo usuário")
    localStorage.setItem('user', novoNome)
    setUser(novoNome)
  }

  return (
    <div className='app'>
        <p>Valor atual: { user }</p>
        <button onClick={ handleChangeUser }>Alterar Valor</button>
    </div>
  );
}

export default App;
````

Para armazenar valores no localStorage do tipo ``array`` ou ``objeto``, você deverá transformá-lo em ``string`` com o ``JSON.stringify()``. Para usar um valor armezenado com o ``JSON.stringify()``, você deverá converte-lo novamente para objeto/array com ``JSON.parse()``.

# MIU - Material UI
Material UI é uma biblioteca de componentes React de código aberto que implementa o Material Design do Google.

Ele inclui uma coleção abrangente de componentes pré-construídos que estão prontos para uso na produção imediatamente.

A interface do usuário do material é bonita por design e apresenta um conjunto de opções de personalização que facilitam a implementação de seu próprio sistema de design personalizado em cima de nossos componentes.

[Para mais informações utilize a documentação oficial da biblioteca.](https://mui.com/pt/material-ui/getting-started/overview/)

## Instalação
````sh
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
````

## Olá Mundo
``src/App.js``
````js
import Button from '@mui/material/Button';

function App() {
  
  return (
    <div className='app'>
      <h1>MUI</h1>
      <Button variant="contained"> Olá Mundo</Button>
    </div>  
  );
}

export default App;
````

## Estrutura de uma página simples
``App.js``
````js
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        {/* Conteúdo da Página Aqui */}
      </Container>
    </ThemeProvider>
  )
}

export default App
````
