import React from 'react';
import ReactDOM from 'react-dom';

// Importamos Bootstrap y FontAwesome
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// Importamos los estilos globales
import './global.css'

import App from './components/App';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <App />, 
    container
);

