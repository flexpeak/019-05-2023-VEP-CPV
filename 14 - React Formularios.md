# React Fragments
Ocasionalmente precisamos de um componente que tenha mais de um elemento pai. Como vimos anteriormente, os componentes React podem ter apenas um elemento pai. 
Normalmente utilizamos uma ``div`` para ser o elemento pai do nosso componente. Porém, no React, é possível utilizarmos Fragments, onde, por meio dele, podemos
simular um elemento pai com uma tag vazia: ``<></>``.

Exemplo:
````js
const Titulo = () => {
  return (
    <>
      <h1>Bem-vindo ao Sistema</h1>
      <h2>Faça login para acessar os recursos</h2>
    </>
  );
};

export default Titulo;
````

# Children Prop
O React tem uma prop especial onde é possível enviar conteúdo ``HTML`` como parte do componente. Essa prop é chamada de ``children`` e ela contém qualquer 
elemento filho definido no componente.

Aplicação:
``Card.js``
````js
const Card = ({children}) => {
    return (
      <div className="card">
        {children}
      </div>
    )
  }
  
  export default Card
````

A utilização desse componente ficaria algo do tipo:
``App.js``
````js
<Card>
  <h1>Este é o conteúdo do card</h1>
</Card>
````

# CSS como Módulos
Ao inserir um arquivo CSS no nosso código como aprendemos anteriormente, todo o estilo nesse arquivo CSS será aplicado na nossa aplicação inteira, inclusive em
classes e IDs que não fazem parte do nosso componente. Para fazermos com que o nosso estilo seja aplicado apenas em nosso componente, temos que incluir o nosso
CSS como se fossem módulos do JavaScript. Devemos seguir a nomenclarua: ``NomeDoComponente`` + ``.module`` + ``.css``.

Exemplo:

``Button.js``
````js
import styles from "./Button.module.css";

const Button = () => {
  return <button className={styles.botao_legal}>Clique em mim</button>;
};

export default Button;
````

``Button.module.css``
````css
.botao_legal {
  background-color: red;
  color: white;
  padding: 5px 20px;
  border-radius: 3px;
}
````

# Trabalhando com Formulários
## Criando Formulários
Para criação de formulários no React iremos utilizar a tag ``form``, igualmente é feito no HTML convencional, porém sem o uso dos atributos ``action`` e ``method``, pois geralmente vamos querer enviar nossos dados para o backend com uma API, nesse caso a submissão convencional do formulário não é indicada. 

Exemplo:

``Formulario.js``
````js
const Formulario = () => {
  return (
    <>
        <form>
            <label>
                <span>Nome</span>
                <input type="text" name="nome" placeholder="Digite seu nome"/>
            </label>

            <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="Digite seu email"/>
            </label>
            
            <button>Salvar</button>
        </form>
    </>
  )
}

export default Formulario
````

É comum cada campo do formulário ficar dentro de uma tag ``label`` para indicar tanto semanticamente quanto para o usuário o que o input representa. 

## Manipulando o Submit
Para manipularmos o Submit do formulário, por exemplo para fazermos um POST em uma API, precisamos mudar o funcionamento padrão da submissão dele. 

``Formulario.js``
````js
const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Foi feito o submit do formulário')
}
````

O ``event.preventDefault()`` altera o padrão do evento de submissão, que é enviar os dados do formulário para uma outra tela. Agora basta chamarmos esse método 
no evento ``onSubmit`` do formulário.

``Formulario.js``
````js
<form onSubmit={handleSubmit}>
````

## Usando o useState para os dados do formulário
Para atribuirmos os dados digiados a uma variável é indicado fazermos uso do useState igualmente foi feito nas outras aulas.

``Formulario.js``
````js
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
````

Agora, para alterarmos as variáveis, devemos fazer uso dos métodos ``set`` no evento de onChange dos inputs.

``Formulario.js``
````js
<input type="text" name="nome" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}/>
````

## Exemplo completo de formulário
``Formulario.js``
````js
import { useState } from "react"

const Formulario = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Foi feito o submit do formulário')
    console.log('O nome é: ' + nome)
    console.log('O email é: ' + email)
  }

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome</span>
                <input type="text" name="nome" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}/>
            </label>

            <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            </label>

            <button>Salvar</button>
        </form>
    </>
  )
}

export default Formulario
````

# Axios
Axios é um cliente HTTP baseado em Promises para fazer requisições.

* Por baixo dos panos faz requisições Ajax no browser via XMLHttpRequests;
* Faz requisições http no Node.js;
* Suporta a API de Promises;
* Intercepta requisições e respostas (request & response);
* Cancela requisições;
* Transforma os dados em JSON automaticamente;
* No lado cliente suporta a proteção contra XRSF;
* Transforma os dados da requisição e da resposta.

Para utilizarmos o Axios em nosso projeto precisaremos instalá-lo. 
````sh
npm i axios
````

Veja exemplos de uso do ``axios`` para requisições do tipo ``GET`` e do tipo ``POST`` na [documentação oficial](https://axios-http.com/ptbr/docs/example).

Coloque o código abaixo no componente ``Formulario.js`` criado no tópico anterior.

``Formulario.js``
````js
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      alert('Requisição feita com sucesso')
    })
    .catch(function (error) {
      alert('Erro ao fazer a requisição')
    })
````

Ao renderizar o componente no navegador, você pode perceber que o ``alert`` da requisição feita com sucesso aparece mais de uma vez. Isso acontece por que toda vez
que o nosso componente é reenderizado a requisição será feita novamente, pois o código está solto em nosso componente. Você pode fazer um teste alterando os inputs, como  estamos fazendo uso do useState no evento onChange, toda vez que alterarmos o valor do input será feita uma nova requisição. Para resolver esse problema, devemos fazer uso de um novo hook chamado **useEffect**.

# useEffect
O useEffect é um Hook que serve para lidar com os efeitos. Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas depois da renderização e apenas uma vez. 

``Formulario.js``
````js
import { useEffect, useState } from "react"
````

````js
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        alert('Requisição feita com sucesso')
      })
      .catch(function (error) {
        alert('Erro ao fazer a requisição')
      })
  }, [])
````

Perceba que dessa forma a requisição será feita apenas uma vez.

> O segundo parâmetro do método do useEffect é um array contendo quais serão as variáveis que, se alteradas, farão o useEffect ser executado novamente. 

## Caso a requisição ainda esteja sendo feita mais de uma vez
O modo estrito (**Strict Mode**) é uma ferramenta para sinalizar potenciais problemas em uma aplicação. Assim como o Fragment , o StrictMode não renderiza nenhum elemento visível na interface. Ele ativa, no entanto, verificações e avisos adicionais para os seus descendentes. Ela está fazendo seu componente renderizar duas vezes e é instalado automaticamente quando usamos o ``react-create-app``. Para desativar você deve editar o arquivo ``index.js`` e retirar a tag ``React.StrictMode`` do arquivo, ficando algo parecido com:

``index.js``
````js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
````

# Componentes como props
Também é possível passarmos componentes como props para outro componente. Por exemplo:

``Formulario.js``
````js
  const Formulario = ({botao}) => {
    // Código do Componente
    /* */
    
    {botao} // Componente botão poderá ser um componente
  })
````

``App.js``
````js
  <Formulario botao={<Button texto="Clique em mim"/>}/>
````

# Context API
No React, quando precisamos que um componente filho tenha os dados do pai, precisamos informar esses dados e funções através das props no componente filho. Com a chegada do Context API no React (a partir da versão 16) esse cenário é diferente, ao invés de passar esses dados através de props, criamos um context que armazena esses dados. Dessa forma, os componentes que precisam dessa informação podem consumi-las. 

> O React context API é um gerenciador de estado global e é uma funcionalidade implementada a pouco tempo no ecossistema do React

Para trabalhar com contexts, vamos criar uma pasta chamada ``context`` dentro do ``src`` do nosso projeto. Nosso contexto precisa de dois recursos: o ``contexto`` em si e o ``provider``. Podemos criá-lo dentro do mesmo arquivo.

``context/UserContext.js``
````js
import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    )
}
````

Após a criação do contexto, devemos usá-lo englobando um componente onde temos toda a nossa aplicação sendo executada. Geralmente utilizamos o ``index.js``.

``index.js``
````js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserConextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserConextProvider>
        <App />
    </UserConextProvider>
);

reportWebVitals();
````

Agora temos acesso a variável ``user`` e a função ``setUser`` em todo componente da nossa aplicação. Para usá-los devemos fazer, por exemplo:

``App.js``
````js
import { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"

const App = () => {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    setUser('João')
  }, [setUser])

  return (
    <div>
      Nome do usuário: { user }
    </div>
  )
}

export default App
````
