import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/Home.css";
import astronaut from '../images/astronauts.svg';

function NotFound() {
    return (
        <div className="Home">
            <div className="row align-items-center mx-auto">
                <div className="col-4 text-center">
                    <h1>404 Error</h1>
                    <h3>¡Page Not Found!</h3>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
                <div className="col-8">
                    <img src={astronaut} alt="Astronaut" />
                </div>
            </div>
        </div>
    )
}

export default NotFound;