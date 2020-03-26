import React from 'react';

// Importamos los componentes 
import Badge from '../components/Badge';
import Navbar from '../components/Navbar';

import '../components/styles/Badge.css'
import header from '../images/badge-header.svg'

class NewBadge extends React.Component{
    render() {
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Mateo" lastName="Serna" twitter="Teoslopera" jobName="Developer" avatarUrl="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewBadge;