import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { FC, useRef } from "react";
import { useHistory } from "react-router";

const Login:FC = () => {
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
        fetch("http://etu1540etu1568flotteavion-production.up.railway.app/admins/checkLogin", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            identifiant:inputIdentifiant,
            pwd: inputLogin
        })
        })
        .then((response) => {
            if (response.status === 500) {
            alert("Mot de passe non identifier");
            } else return response.text();
        })
        .then((token) => {
            if(token!=undefined){                
                localStorage.setItem("Authorization",'Bearer'+token)            
            }
        });

        
    };
    
    return(
        <IonPage>
            

            <IonContent className='ion-padding'>
            <IonGrid>
                <IonRow>
                <IonCol>

                    <IonRow>
                    <IonItem>
                        <IonLabel position='floating'>Nom</IonLabel>
                        <IonInput ref={identifiant} value="nomAdmin"></IonInput>
                    </IonItem>
                    </IonRow>

                    <IonRow>
                    <IonItem>
                        <IonLabel position='floating'>Password</IonLabel>
                        <IonInput ref={password} value="mdp"></IonInput>
                    </IonItem>
                    </IonRow>


                    <IonRow>
                    <IonCol>
                        <IonButton onClick={checkLogin}>Se connecter</IonButton>
                    </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonLabel position='floating'><a href="#">Not have account yet</a></IonLabel>
                    </IonRow>


                </IonCol>
                </IonRow>
            </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default Login;