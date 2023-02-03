import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import React, { FC, useRef } from "react";
import { getUrl } from "../data/Url";
import { useHistory } from "react-router";

const Inscription:FC = () => {
    const nom = useRef<HTMLIonInputElement>(null);
    const prenom = useRef<HTMLIonInputElement>(null);
    const email = useRef<HTMLIonInputElement>(null);
    const pwd = useRef<HTMLIonInputElement>(null);

    const history = useHistory();
  const HandleSignIn = () => {

    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(getUrl()+"/clients/signIn", {
      method:"POST",
      headers:{
          "Content-Type": "application/json",
      },
      body:JSON.stringify({
          nom:nom.current!.value, 
          prenom:prenom.current!.value,
          email:email.current!.value,
          password: pwd.current!.value
      })
      })
      .then((response) => {
          if (response.status === 500) {
              alert("Mot de passe non identifier");
          } 
          else 
            history.push("/login");
      });

      
  };

  return (
    <IonPage>
      <IonHeader> 
            <IonToolbar>
                <IonRow>
                    <IonGrid>Inscription</IonGrid>
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
                <IonInput ref={nom}></IonInput>
            </IonItem>
            </IonRow>

            <IonRow>
            <IonItem>
                <IonLabel position='floating'>Prenom</IonLabel>
                <IonInput ref={prenom} ></IonInput>
            </IonItem>
            </IonRow>

            <IonRow>
            <IonItem>
                <IonLabel position='floating'>Email</IonLabel>
                <IonInput ref={email} ></IonInput>
            </IonItem>
            </IonRow>

            <IonRow>
            <IonItem>
                <IonLabel position='floating'>Password</IonLabel>
                <IonInput ref={pwd} ></IonInput>
            </IonItem>
            </IonRow>


            <IonRow>
            <IonCol>
                <IonButton onClick={HandleSignIn}>Se connecter</IonButton>
            </IonCol>
            </IonRow>


        </IonCol>
        </IonRow>
    </IonGrid>
    </IonContent>
</IonPage>
  );
};

export default Inscription;