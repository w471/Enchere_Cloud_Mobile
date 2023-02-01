import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { FC, useRef, useState } from "react";
import { useHistory } from "react-router";
import {Enchere} from '../data/Enchere';

const AddAuction:FC = () => {
    const history = useHistory();
    const [allCategorie, setallCategorie] = useState([]);

    const description = useRef<HTMLIonTextareaElement>(null);
    const startPrice = useRef<HTMLIonInputElement>(null);
    const duration = useRef<HTMLIonInputElement>(null);
    const idCategorie = useRef<HTMLIonSelectElement>(null);


    useIonViewWillEnter( ()=>{
        fetch("http://localhost:8080/categories", {
            method: "GET"
        })
        .then ( (response:any) => {
            if(response.status==200)
                return response.json();

            else
                throw new Error(response);
        })
        .then( (json) => {
            setallCategorie(json);
            console.log(json);
            
        })
        .catch( error =>{
            alert(error);
        })
    });

    const add = () => {
        fetch("http://localhost:8080/encheres", {
            method : "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify ({
                description : description!.current!.value,
                duration : duration!.current!.value,
                idCategorie : idCategorie!.current!.value,
                startPrice : startPrice!.current!.value,
                idLauncher : localStorage.getItem("idPersonne")
            })
        })
        .then((response:any)=>{
            if(response.status==200)
                return "Insertion réussie"; 

            else
                throw new Error(response);
        })
        .then( (correct) => {
            alert(correct);
            console.log(correct);
        })
        .catch( (error)=> {
            console.log(error);
            
        })
    }

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
                                <h2>Ajouter une enchère</h2>
                            </IonRow>

                            
                            <IonRow>                            
                                <IonItem>
                                    <IonLabel position='floating'>Description</IonLabel>
                                    <IonTextarea ref={description}></IonTextarea>
                                </IonItem>
                            </IonRow>    

                            <IonRow>
                                <IonItem>
                                    <IonSelect ref={idCategorie} placeholder="Categorie">
                                            {
                                                allCategorie.map( (element:any,index) =>(
                                                    <IonSelectOption key={index} value={element.idCategorie}>{element.nomCategorie}</IonSelectOption>  
                                                ))
                                            }
                                        </IonSelect>
                                </IonItem>                            
                            </IonRow>            

                             <IonRow>
                            
                                <IonGrid>
                                <IonItem>
                                    <IonLabel position='floating'>Duration</IonLabel>
                                    <IonInput ref={duration} ></IonInput>
                                </IonItem>
                                </IonGrid>

                                <IonGrid>
                                <IonItem>
                                    <IonLabel position='floating'>Start price</IonLabel>
                                    <IonInput ref={startPrice} ></IonInput>
                                </IonItem>
                                </IonGrid>
                            
                            </IonRow>    


                             

                            <IonRow>
                                <IonButton onClick={add} >Ajouter</IonButton>
                            </IonRow>

                        </IonCol>
                    </IonRow>
                </IonGrid>  
            </IonContent>            
             
        </IonPage>
    );
}
export default AddAuction;