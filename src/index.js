import React from 'react';
import ReactDOM from 'react-dom';

// Importamos el componente NewBadge - Pagina
import NewBadge from './pages/NewBadge';

// Nueva pagina
import Badges from './pages/Badges';

// Importamos Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

// Importamos los estilos globales
import './global.css'

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <Badges />, 
    container
);

