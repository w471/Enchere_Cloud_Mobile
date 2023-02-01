import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { home } from "ionicons/icons";
import { FC } from "react";
import { useHistory } from "react-router";

const Accueil:FC = () => {
    const history = useHistory();
    const checkSolde = () =>{
        history.push("/rechargeAccount");
    }

    return(
        <IonPage>
            <IonHeader> 
            <IonToolbar>
                <IonRow>
                    <IonGrid>Page title</IonGrid>
                    <IonGrid>
                        <IonButton onClick={checkSolde} >Solde :  500£</IonButton>
                    </IonGrid>
                </IonRow>
            </IonToolbar>
            </IonHeader> 

            <IonContent className='ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                        <IonRow>
                                <h2>Enchères possédées</h2>
                            </IonRow>            

                            <IonRow>
                                <IonItem>
                                    <IonGrid>
                                        <IonRow>Product name</IonRow>
                                        <IonRow>Current Price</IonRow>
                                    </IonGrid>
                                    <IonGrid>
                                        Fini
                                    </IonGrid>
                                </IonItem>
                            </IonRow>

                            <br />

                            <IonRow>
                                <IonItem>
                                    <IonGrid>
                                        <IonRow>Product name</IonRow>
                                        <IonRow>Current Price</IonRow>
                                    </IonGrid>
                                    <IonGrid>
                                        En cours
                                    </IonGrid>
                                </IonItem>
                            </IonRow>

                            <br />

                            <IonRow>
                                <IonItem>
                                    <IonGrid>
                                        <IonRow>Product name</IonRow>
                                        <IonRow>Current Price</IonRow>
                                    </IonGrid>
                                    <IonGrid>
                                        Fini
                                    </IonGrid>
                                </IonItem>
                            </IonRow>

                         
                        </IonCol>
                    </IonRow>
                </IonGrid>  
            </IonContent>

        </IonPage>
    );
}
export default Accueil;