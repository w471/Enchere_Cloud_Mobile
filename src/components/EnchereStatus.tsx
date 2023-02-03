import { IonGrid, IonItem, IonPage, IonRow } from "@ionic/react";
import { FC } from "react";

const EnchereStatus:FC<{description:string;price:number;status:number}> = (props) =>{
    var myStatus = ['En cours','Fini'];
    return(
        <>

        <IonRow>
            <IonItem>
                <IonGrid>
                    <IonRow>{props.description}</IonRow>
                    <IonRow>{props.price}</IonRow>
                </IonGrid>
                <IonGrid>
                    {myStatus[props.status]}
                </IonGrid>
            </IonItem>
        </IonRow>
        </>
    );
}
export default EnchereStatus;