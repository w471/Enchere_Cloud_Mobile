import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow} from "@ionic/react";
import React, { useRef, useState } from "react";
import { FC } from "react";
import { getUrl } from "../data/Url";

const RechargeAccount:FC = () => {
    const money = useRef<HTMLIonInputElement>(null);
    const [success_fail, setSuccess_fail] = useState<any>(null);

    const chargeAccount = () =>{
        fetch(getUrl()+"/clients/refill", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                vola : money!.current!.value,
                idClient : localStorage.getItem("idPersonne"),
                valide : 0
            })
            })
            .then((response) => {
                if(response.status===200)
                    setSuccess_fail("Demande de recharge réussie")
                
                else
                    setSuccess_fail("Demadne de recharge echouée");
            });
    }

    
    return(
        <IonPage>
            <IonContent className='ion-padding'>
            <IonGrid>
                <IonRow>
                <IonCol>

                    <IonRow>
                    <IonItem>
                        <IonLabel position='floating'>Recharger de  </IonLabel>
                        <IonInput type="number" ref={money} ></IonInput>
                    </IonItem>
                    </IonRow>


                    <IonRow>
                    <IonCol>
                        <IonButton onClick={chargeAccount} >Valider</IonButton>
                    </IonCol>
                    </IonRow>

                    <p>{success_fail}</p>

                </IonCol>
                </IonRow>
            </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default RechargeAccount;