import { IonButton, IonCol, IonItem, IonPage, IonRow } from '@ionic/react';
import { useHistory } from "react-router-dom";
import React, { Component, useEffect, useState } from 'react'
import Vehicule from './Vehicule';


const ListeVehicule:React.FC = () => {
    const navigate = useHistory();
    
    const getDetails = (idVehicule:string) =>{
        if(localStorage.getItem("Authorization")==null)
            // window.location.href = "/";
            navigate.push("/login"+idVehicule)

        else {
            navigate.push("/detailsVehicule/"+idVehicule);
        }
    }

    const [Vehicules, setVehicules] = useState([]);

    useEffect(() => {
        fetch("http://etu1540etu1568flotteavion-production.up.railway.app/vehicules", {
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then( (response) =>  {
            return response.json();
        } )
        .then( (json) => {
            setVehicules(json);
        })
    }, [])
    
    

    // Displaying the liste of all the vehicules
    return(
        <IonPage>
            { 
                Vehicules?.map( (element,index) =>(
                    <IonRow key={index}>
                        <IonCol>
                            <IonRow>
                                <IonItem>
                                    <Vehicule nom={element['nom']} matricule={element['matricule']}/>
                                </IonItem>
                            </IonRow>

                            <IonRow>
                                <IonButton onClick={()=>(getDetails(element['id']))}>Détails</IonButton>                            
                            </IonRow>
                                
                        </IonCol>
                    </IonRow>    
                ))
                }
                <hr/>
        </IonPage>
    );
}

export default ListeVehicule;