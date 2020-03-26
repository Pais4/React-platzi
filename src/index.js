import React from 'react';
import ReactDOM from 'react-dom';

// Importamos el componente Badge
import NewBadge from './pages/NewBadge';

// Importamos Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Importamos los estilos globales
import './global.css'

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <NewBadge />, 
    container
);

