# Introdução
React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros.

A princípio, todas essas atividades, chamadas de estados, tinham uma descrição muito complexa. Com o React, esta descrição torna-se mais simples, bem como também é simplificada a conexão entre HTML, CSS e JavaScript e todos os componentes de uma página.

## SPA

SPA significa Aplicação de Página Única, e trata-se de um método - relativamente novo - para o desenvolvimento web baseado em técnicas de front-end, usando sobretudo de JavaScript e seus frameworks. As praticas baseadas em SPA envolvem codificar menos no server-side e mais no client-side, proporcionando ao usuário uma aplicação dinâmica, que carrega recursos conforme necessário. Quando um usuário acessa um site construído dentro do conceito de SPA, a aplicação e seus componentes são armazenados no lado cliente, diferente da forma tradicional, quando o usuário precisa vistar várias páginas diferentes e recarregá-las para visualizar atualizações.

## NPX

Desde a versão 5.2.0 do npm, o npx vem integrado a ele. Desse modo, ele passou a ser um padrão nos dias de hoje.

O npx também é uma ferramenta de interface de linha de comando, cujo propósito é facilitar a instalação e o gerenciamento de dependências hospedadas no registro do npm.

Agora, é muito fácil executar qualquer tipo de executável com base no Node.js que você instalaria normalmente por meio do npm.

Se o npx não estiver instalado no seu PC, você pode instalá-lo através do NPM

````sh
npm install -g npx
````

# Instalação
````sh
npx create-react-app NOME_DO_PROJETO
````

## Observação
Para esse comando é necessário que não haja nenhum instalador global do React previamente instalado no seu computador. Se houver, você pode remover com:
````sh
npm uninstall -g create-react-app
````

Após a instalação, você pode entrar na pasta e então iniciar o servidor.
````sh
cd NOME_DO_PROJETO && npm start
````

# Estrutura

## node_modules
Pasta onde ficam as dependências do projeto.

## public
Pasta onde ficarão os arquivos estáticos do nosso projeto, como imagens, robots.txt e etc.

## src
Pasta onde ficará o nosso código-fonte. Nesta pasta ficará todo o código da nossa aplicação pré-compilação. 

## src/index.js
É o arquivo principal do React. É onde a aplicação é inicializada.

## src/App.js
É o componente padrão do React. Podemos ou não fazer uso dele na nossa aplicação e servirá de base para a criação de outros componentes.

# JSX
Criado pela equipe de desenvolvimento do React, o JSX é uma forma de criar elementos para serem utilizadas como templates de aplicações React. Basicamente, os elementos criados com o JSX são bem similares com código HTML e fornecem aos desenvolvedores uma forma mais simples e intuitiva de criar os componentes de uma aplicação.

## Sintaxe
Como dito anteriormente, o JSX possui uma sintaxe muito semelhante ao HTML. O código abaixo demonstra claramente esta característica. Apesar de muito parecido, o código a seguir não é HTML e sim um trecho de código JSX.

````js
const nav = (
  <nav>
    <ul>
      <li><a href="#">Início</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </nav>
)
````

# Componentes
Geralmente, componentes React são como funções JavaScript. Eles aceitam entradas como propriedades (chamadas “props”) e retornam novos elementos React, os chamados JSX. Os componentes permitem que a UI seja dividida em partes independentes e reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado, livre de outras dependências externas.

Os componentes precisam, por organização, estar em uma pasta específica. Por isso, devemos criar uma pasta chamada ``components`` dentro da nossa pasta ``src``. 

## Criando o primeiro componente
``components/PrimeiroComponente.js``
````js
const PrimeiroComponente = () => {
    return (
        <div>
            <h1>Este é o meu primeiro componente React</h1>
        </div>
    )
}

export default PrimeiroComponente
````

### Importando o componente "PrimeiroComponente"
``App.js``
````js
import PrimeiroComponente from './components/PrimeiroComponente';

function App() {
  return (
    <div className="App">
      <PrimeiroComponente></PrimeiroComponente>
    </div>
  );
}

export default App;
````

O componente pode ter apenas um elemento pai. No nosso exemplo, o elemento pai é ``<div  className="app">``. Além disso, por ser JSX, o atributo ``class`` passa a ser chamado de ``className``.

# Template Expressions
Permite executar código JavaScript dentro de componentes React.
``App.js``
````js
import PrimeiroComponente from './components/PrimeiroComponente';

function App() {
  const meuNome = 'João da Silva'

  return (
    <div className='app'>
      <PrimeiroComponente></PrimeiroComponente>
      Meu nome é { meuNome }. Minha idade é { 2022 - 1992 }.
    </div>
  );
}

export default App;
````

# Trabalhando com Assets
Para nós utilizarmos arquivos estáticos no React, é recomendado a inclusão dele nos códigos Reacts de forma programática. As imagens, por exemplo, nós colocaremos dentro de uma pasta chamada ``assets`` dentro de ``src``. Já os arquivos css, devemos colocar dentro de uma pasta junto com o nosso componente.

## Trabalhando com Imagens
Coloque uma imagem dentro da pasta ``assets``. No nosso exemplo a chamaremos de ``assets/logo.png``. 

``src/components/PrimeiroComponente.js``
````js
import Logo from '../assets/logo.png';

const PrimeiroComponente = () => {
    return (
        <div>
            <img src={Logo} alt="Logo da Empresa" />
        </div>
    )
}

export default PrimeiroComponente
````

Perceba que a logo tem que ser importada com ``import`` e utilizada no HTML usando a interpolação ``{Logo}``.

## Trabalhando com Componentes e CSS
Para melhor organização, cada compontente tem que ser criado dentro de uma pasta junto com seu arquivo CSS. Por exemplo, vamos criar o componente de botão. Portanto, precisamos criar a pasta ``src/components/button``. Dentro dessa pasta criaremos outros dois arquivos, um ``Button.js`` e outro ``Button.css``. O conteúdo dos arquivos está abaixo:

``src/components/button/Button.js``
````js
import './Button.css'

const Button = () => {
  return (
    <button className="btn">
        Clique em mim
    </button>
  )
}

export default Button
````

``src/components/button/Button.css``
````css
.btn {
    color: #fff;
    background-color: #5ea2fb;
    padding: 10px 20px;
    border-radius: 10px;
    border: 0;
}

.btn:hover {
    background-color: #3480e3;
    cursor: pointer;
}
````
> Caso seu componente precise de alguma imagem para funcionar é recomendado que seja criado uma pasta ``assets`` dentro da pasta do seu componente. 

# Trabalhando com Eventos
Constantemente precisaremos trabalhar com eventos em nossos componentes. Um dos mais utilizados é o evento de ``click``. No React nós podemos, por exemplo, executar uma função JavaScript a partir de um evento de click em qualquer elemento, mesmo elementos que não sejam um botão. 

Dentro de um elemento, devemos fazer uso do atributo onClick para executar uma função. Exemplo:
``Button.js``
````js
import './Button.css'

const handleClick = () => {
    alert(`Evento de click executado`)
}

const Button = () => {
  return (
    <button className="btn" onClick={handleClick}>
        Clique em mim
    </button>
  )
}

export default Button
````

## Outros Eventos Utilizados
### onSubmit
Escuta uma submissão de um formulário
### onChange
Escuta a alteração de algum input do HTML
### onKeyPress
Escuta o pressionamento de alguma tecla
### onFocus
Escuta o click de ativação em algum elemento
### Outros
Uma listagem de eventos pode ser [encontrada aqui](https://pt-br.reactjs.org/docs/events.html).

# Two Way Data Binding - useState
Por padrão o React é One Way Data Binding. Se mudarmos o valor de uma variável, não mudaremos a renderização do componente. Por exemplo, no código abaixo a variavel ``valorBotao`` mostrará sempre o valor ``1``, mesmo ela sendo alterada com o médoto ``handleClick``. 

``Botao.js``
````js
import './Button.css'

var valorBotao = 1

const handleClick = () => {
    valorBotao++
}

const Button = () => {
  return (
    <div>
        <button className="btn" onClick={handleClick}>
            Clique em mim
        </button>
        <p>Valor do Botão: { valorBotao }</p>
    </div>
    
  )
}

export default Button
````

Para fazer com que o componente sempre fique atualizado, precisamos fazer uso de um **React Hook** chamado ``useState``. O padrão que normalmente seguimos é:
````js
const [nomeDaVariavel, setNomeDaVariavel] = useState(valor_inicial);
````
Onde estiver nomeDaVariavel você vai colocar o nome da sua variavel. Por exemplo:
````js
const [telefoneDoUsuario, setTelefoneDoUsiario] = useState();
````
Sendo que o valor_inicial é opcional e pode ser de qualquer tipo: string, number e etc.

## useState em array
A maneira correta de alterar o valor do useState de um array é a seguir:
````js
setNomeDaVariavel([...nomeDaVariavel, novoIndiceDoArraty])
````

# Renderização Condicional
As vezes precisamos exibir um elemento HTML conforme uma condição. Para isso precisamos fazer uso de um ``if`` ternário, exemplo:
````js
const resultado = condicao ? true : false
````
O valor da variável ``resultado`` será verdadeiro caso a condição seja verdeira e falso caso a condição seja falsa. 

``button/Button.js``
````js
import { useState } from 'react'
import './Button.css'

const Button = () => {
  const loggedIn = true
  return (
    <div>
        {!loggedIn ? (
            <button className="btn">
                Fazer Login
            </button>
        ) : (
            <span>Você já está logado</span>
        )}
        
    </div>
    
  )
}

export default Button
````

Existe uma maneira mais simples de fazermos uma renderização condicional especialmente quando não há um else.
````js
{loggedIn && (<button className="btn">Fazer Login</button>)}
````

# Renderizando HTML com Loop
Constantemente precisamos renderizar várias vezes o mesmo elemento HTML para dados presentes em um array. Por exemplo:
````js
const usuarios = ['João', 'Maria', 'Tereza', 'Ricardo', 'Márcio', 'José', 'Mauro'];
````
No array acima temos vários usuários. Para criarmos uma lista desses usuários utilizando HTML puro precisaremos fazer algo do tipo:
````html
<ul>
  <li>João</li>
  <li>Maria</li>
  <li>Tereza</li>
  <li>Ricardo</li>
  <li>José</li>
  <li>Mauro</li>
</ul>
````
Porém teríamos um problema caso precisássemos adicionar um ``class`` em cada um dos elementos ``<li>``. O React permite que na mesma linha de código a gente gere essa lista de forma prática e fácil.
``listaAtividades/ListaAtividades.js``
````js
const ListaAtividades = () => {
    const usuarios = ['João', 'Maria', 'Tereza', 'Ricardo', 'Márcio', 'José', 'Mauro'];
  
    return (
      <div>
          <ul>
              { usuarios.map((usuario, index) => (
                    <li key={index}>{ usuario }</li>
              )) }
          </ul>
      </div>
    )
  }
  
  export default ListaAtividades
````

A função ``map`` funciona parecida com a função ``forEach``, a diferença é que é possível retornar valores nela através do ``return``, ou, no caso das arrow functions, o retorno virá entre parênteses logo após a arrow ``=>``. Dessa forma conseguimos retornar um código JSX na função ``map``. 

# Props
As props são como argumentos de funções, e você pode enviá-las para os componentes como atributos. Portanto, através das props nós podemos passar valores de um componente pai para um componente filho. Para fazer uso de prop, você deve receber como argumento da função do componente. 

``button/Button.js``
````js
import './Button.css'

const Button = ({texto}) => {
  return (
    <div>
        <button className="btn">
            { texto }
        </button>
    </div>
    
  )
}

export default Button
````

``App.js``
````js
<Button texto="Clique no Botão"/>
````

> Você pode passar duas ou mais props separando por vírgula cada prop dentro do parâmetro da função principal do seu componente. 
