import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { FC } from "react";

const RechargeAccount:FC = () => {
    return(
        <IonPage>
            <IonContent className='ion-padding'>
            <IonGrid>
                <IonRow>
                <IonCol>

                    <IonRow>
                    <IonItem>
                        <IonLabel position='floating'>Montant</IonLabel>
                        <IonInput value="nomAdmin"></IonInput>
                    </IonItem>
                    </IonRow>

                   


                    <IonRow>
                    <IonCol>
                        <IonButton >Valider</IonButton>
                    </IonCol>
                    </IonRow>

                    <p>On peut afficher le message d'erreur ou de réussite</p>

                </IonCol>
                </IonRow>
            </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default RechargeAccount;