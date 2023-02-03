import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { home } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useHistory } from "react-router";
import EnchereStatus from "../components/EnchereStatus";
import { getUrl } from "../data/Url";
import Header from "../components/Header";

const Accueil:FC = () => {
    const [allPossesed, setAllPossesed] = useState([]);
    const [allInvolved, setAllInvolved] = useState([]);

    useEffect( ()=> {
        fetch(getUrl()+"/clients/getPossesed?idPersonne="+localStorage.getItem("idPersonne"), {
            method: "GET"
        })
        .then ( (response:any) => {
            if(response.status==200)
                return response.json();

            else
                throw new Error(response);
        })
        .then( (json) => {
            setAllPossesed(json)
            console.log(json);
        })
        .catch( error =>{
            alert(error);
        })

        fetch(getUrl()+"/clients/getInvolved?idPersonne="+localStorage.getItem("idPersonne"), {
            method: "GET"
        })
        .then ( (response:any) => {
            if(response.status==200)
                return response.json();

            else
                throw new Error(response);
        })
        .then( (json) => {
            setAllInvolved(json);
            console.log(json);
        })
        .catch( error =>{
            alert(error);
        })
    },[])

    return(
        <IonPage>
           <Header title="Accueil" />

            {/* <IonRow> */}
               {/* <IonItem> */}
               <IonGrid>
                    <h3>Enchères possedées</h3>
                    {
                        allPossesed.map( (ind:any,index:number) =>(
                            <EnchereStatus key={index} description={ind.description} price={ind.price} status={ind.status} />
                        ))
                    }
                </IonGrid>
               {/* </IonItem> */}

                {/* <IonItem> */}
                <IonGrid>
                <h3>Enchères participées</h3>
            {
                allInvolved.map( (ind:any,index:number) =>(
                    <EnchereStatus key={index} description={ind.description} price={ind.price} status={ind.status} />
                ))
            }
                </IonGrid>
                {/* </IonItem> */}
            {/* </IonRow> */}
            

            

        </IonPage>
    );
}
export default Accueil;