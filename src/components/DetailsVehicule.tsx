import { IonPage } from '@ionic/react';
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import DetailVehicule from './DetailVehicule';

const DetailsVehicule:React.FC = () => {
    const id = useParams<any>();
    var bref:[] = [];
    const [allDetails, setallDetails] = useState<[]>()
    console.log(id.id);
    

    useEffect(() => {
        fetch("http://etu1540etu1568flotteavion-production.up.railway.app/kilometrages/forIdVehicule/"+id.id, {
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then( (response) =>  {
            return response.json();
        } )
        .then( (json) => {
            setallDetails(json)
        });

    },[] )    

    return(
        <IonPage>
            {
                allDetails?.map( (element,index) => (
                    <DetailVehicule key={index} dateKilometrage={element['datekilometrage']} debutkm={element['debutkm']} finkm={element['finkm']}  />
                ))
            }
        </IonPage>  
    );
}
export default DetailsVehicule;