import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { FC, useRef, useState } from "react";
import { useHistory } from "react-router";
import {Enchere} from '../data/Enchere';
import {Camera,CameraResultType, CameraSource} from '@capacitor/camera';
import Header from "../components/Header";

const AddAuction:FC = () => {
    const history = useHistory();
    const [allCategorie, setallCategorie] = useState([]);
    const [picture,setPicture] = useState<any>();

    const description = useRef<HTMLIonTextareaElement>(null);
    const startPrice = useRef<HTMLIonInputElement>(null);
    const duration = useRef<HTMLIonInputElement>(null);
    const idCategorie = useRef<HTMLIonSelectElement>(null);

    const takePicture = async () => {
        const photo = await Camera.getPhoto({
            quality : 90,
            allowEditing : false,
            resultType : CameraResultType.Base64,
            source : CameraSource.Photos
        })

        console.log(photo);
        setPicture(photo);
    }

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
                idLauncher : localStorage.getItem("idPersonne"),
                image : picture.base64String
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

    
    
    return(
        <IonPage>
            <Header title="Ajouter une enchère" />

            <IonContent className='ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            
                            
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
                                    <IonLabel position='floating'>Duration en heure</IonLabel>
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
                                <IonItem>
                                    <IonButton onClick={takePicture} >Take picture</IonButton>
                                </IonItem>
                            </IonRow>

                            {picture && 
                            <IonRow>                            
                                    <img src={`data:assets/images/${picture.format};base64,${picture.base64String}`} alt={"No image avalaible"} width="50%" />
                            </IonRow>  
                                
                            }

                            
                             

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