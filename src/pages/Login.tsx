import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import React, { useState } from "react";
import { FC, useRef } from "react";
import { useHistory } from "react-router";
import { getUrl } from "../data/Url";
//import '.component/Components.tsx'

const Login:FC = () => {
    const [error, setError] = useState<any>(null);
    const identifiant = useRef<HTMLIonInputElement>(null);
    const password = useRef<HTMLIonInputElement>(null);
    const history = useHistory();

    useIonViewWillEnter( ()=>{
        if(localStorage.getItem("Authorization")!=undefined){
            history.push("/home");
        }
    })
    

  const checkLogin = () => {    
        // the ref we obtained can't be null since we already pointed it
        const inputIdentifiant = identifiant.current!.value;
        const inputLogin = password.current!.value;
        
        if(inputLogin=='' || inputIdentifiant=='' )
        return;

    // Send the login to the api 
        fetch(getUrl()+"/clients/checkLogin", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            email:inputIdentifiant,
            password: inputLogin
        })
        })
        .then((response) => {
            if (response.status === 500) {
                alert("Mot de passe non identifier");
                setError("Mot de passe non identifier");
            } else return response.json();
        })
        .then((token) => {
            if(token!=undefined){
                localStorage.setItem("idPersonne",token[1])    
                localStorage.setItem("Authorization",'Bearer'+token[0])
                history.push("/home");         
            }
        });

        
    };
    
    return(
        <IonPage class="bg-warning p-2 text-dark bg-opacity-25">
             <IonHeader> 
            <IonToolbar>
                <IonRow>
                    <IonGrid>Login</IonGrid>
                </IonRow>
            </IonToolbar>
            </IonHeader> 

            <IonContent className='ion-padding'>
            <IonGrid>
                <IonRow>
                    
                <IonCol>

                    <IonRow>
                    <IonItem>
                        <IonLabel position='floating'>Nom</IonLabel>
                        <IonInput ref={identifiant} value="jean@gmail.com"></IonInput>
                    </IonItem>
                    </IonRow>
                    <br/>
                    <IonRow>
                    <IonItem>
                        <IonLabel position='floating'>Password</IonLabel>
                        <IonInput ref={password} value="mdp"></IonInput>
                    </IonItem>
                    </IonRow>

                    <br/>
                    <IonRow>
                    <IonCol>
                        <IonButton class="btn btn-info" onClick={checkLogin}>
                            <div className="bouton">
                            Se connecter
                            </div>   
                            </IonButton>
                    </IonCol>
                    </IonRow>

                    {error && <IonRow>
                    <IonItem>
                        <IonLabel >{error}</IonLabel>
                    </IonItem>
                    </IonRow>}


                    <IonRow>
                        <IonLabel  position='floating'><a href="/inscription">Not have account yet</a></IonLabel>
                    </IonRow>

                    

                </IonCol>
                </IonRow>
            </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default Login;