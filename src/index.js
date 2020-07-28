import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


//<BrowserRouter>
//    <App /> => chama o App
//</BrowserRouter>,
// Switch é basicamente um if aqui
// Route é rota, nele a gente coloca qual a rota/endereço que vai acessar aquela categoria

// path="/" => nada ou uma barrinha no endereço

// component={App} o que vai rodar quando a gente chamar aquele path

// Route App tem que ficar por último

//Lembre-se, é SPA, ou seja, uma única url, logo, mudar de url só chama outras funções

// Se a página não existir, ele manda pra Home, por isso, é preciso usar o 404

// <Route path="/" component={App} exact /> => exact só deixa acessar se for aquele endereço. Com isso aqui, você pode deixa o App em primeiro também

// Sem path, vai ser carregado se der erro, se não existir aquele endereço e etc...

//<Route component={() => (<div>404</div>)} /> => se não existir o endereço, ele entra aqui
  //() => (<div>404</div>) => arrow function,funciona como uma função, pesquisa rapidinho e seja feliz