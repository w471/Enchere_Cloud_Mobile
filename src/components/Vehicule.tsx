import React, { Component } from 'react'

const Vehicule: React.FC<{nom:string;matricule:string}> = (props) => {
    return(
        <React.Fragment>
            <h2>Vehicule name : {props.nom}</h2>
            <p><b>Matricule: {props.matricule} </b></p>
        </React.Fragment>
    );
}

export default Vehicule;