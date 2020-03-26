import React from 'react';

// Le daremos una referencia a la imagen que vamos a importar
import confLogo from '../images/badge-header.svg'

// Importamos el CSS
import './styles/Badge.css';

class Badge extends React.Component{

    /* Render (Metodo obligatorio) -> Define cual va a ser el resultado
     * Que vamos a ver en pantalla. */
    render(){

        const firstName = 'Mateo';
        const lastName= 'Serna';

        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>

            <div className="Badge__section-name">
                <img src={this.props.avatarUrl} alt="Avatar" className="Badge__avatar"/>
                <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.twitter}</div>
            </div>

            <div className="Badge__footer">
                #PlatziConf
            </div>
        </div>
    }
}

/* Como estamos en un archivo tenemos que asegurarnos
 * De exportar el componente. */
export default Badge;