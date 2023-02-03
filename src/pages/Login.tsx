import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { FC, useRef } from "react";
import { useHistory } from "react-router";
import { getUrl } from "../data/Url";

const Login:FC = () => {
    const identifiant = useRef<HTMLIonInputElement>(null);
    const password = useRef<HTMLIonInputElement>(null);
    const history = useHistory();

    // useIonViewWillEnter( ()=>{
    //     if(localStorage.getItem("tokenClient")!=undefined){
    //         history.push("/home");
    //     }
    // })
    

  const checkLogin = () => {    
        // the ref we obtained can't be null since we already pointed it
        const emailInput = identifiant.current!.value;
        const passwordInput:any = password.current!.value;
        
        if(emailInput=='' || passwordInput=='' )
        return;

    // Send the login to the api 
        fetch(getUrl()+"/clients/checkLogin", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            email:emailInput,
            password: passwordInput
        })
        })
        .then((response:any) => {
            if (response.status === 500) 
                throw new Error(response);
            else 
                return response.json();
        })
        .then((token) => {
            localStorage.setItem("tokenClient",token[0])
            localStorage.setItem("idPersonne",token[1]);
            history.push("/home");
        })
        .catch( (error) =>{
            alert("Mot de passe non identifier");
        })

        
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
                        <IonInput ref={identifiant} value="jean@gmail.com"></IonInput>
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
                        <IonLabel position='floating'><a href="/inscription">S'inscrire</a></IonLabel>
                    </IonRow>


                </IonCol>
                </IonRow>
            </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default Login;