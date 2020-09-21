import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Global.css'
import Aplicacion from './components/Aplicacion';



const container = document.getElementById('root');

ReactDOM.render(
  <Aplicacion />, 
  container
)









// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// CODIGO JSX
/* const jsx = <h1>Hello, estudiantes de la media</h1>;
const container = document.getElementById('root');

ReactDOM.render(
jsx,
container
); */

//CODIGO JS
//  const elemento = React.createElement(
//   'h1',
//    {},
//    'Hola');

// const container = document.getElementById('root');

// ReactDOM.render(
//   elemento,
//   container
// ) 

/* const element = React.createElement(
  'a',
 {href:"https://github.com/derlyvivianamurcia"},
  'GitHub'
   )

 const container = document.getElementById('root');

 ReactDOM.render(
  element,
   container
 )
 */

 /* const name = 'Viviana';
 const element = React.createElement(
   'h1',
   {},
   `Hola, soy ${name}`
 );

 const container = document.getElementById('root');

ReactDOM.render(
  element,
  container
) */

//JSX
/* const suma = () => 3+3
const jsx = <h1>La suma es: {null}</h1>
const container = document.getElementById('root');

ReactDOM.render(
  jsx,
  container
) */

/* const jsx= 
  <div>
    <h1>
      buen día, soy Derly
    </h1>
    <p>
      Soy desarrolla FrontEnd
    </p>
  </div>
const container = document.getElementById('root')
ReactDOM.render(
  jsx,
  container
) */

// const elemento = React.createElement(
//   'div',
//   {},
//   React.createElement('h1', {}, 'buen día, soy Derly'),
//   React.createElement('p', {}, 'soy desarrolla FrontEnd')
// )
// const container = document.getElementById('root')
// ReactDOM.render(
//   elemento,
//   container
// )
