import { IonGrid, IonItem, IonPage, IonRow, useIonViewWillEnter } from "@ionic/react";
import { FC, useEffect, useState } from "react";
import { getUrl } from "../data/Url";
import RechargeAccount from "./RechargeAccount";
import EnchereStatus from "../components/EnchereStatus";

const EnchereList:FC = () => {
    const [allPossesed, setAllPossesed] = useState([]);
    const [allInvolved, setAllInvolved] = useState([]);

    useEffect( ()=> {
        fetch(getUrl()+"/clients/getPossesed?idPersonne="+localStorage.getItem("idPersonne"), {
            method: "GET"
        })
        .then ( (response:any) => {
            if(response.status==200)
                return response.json();

            else
                throw new Error(response);
        })
        .then( (json) => {
            setAllPossesed(json)
            console.log(json);
        })
        .catch( error =>{
            alert(error);
        })

        fetch(getUrl()+"/clients/getInvolved?idPersonne="+localStorage.getItem("idPersonne"), {
            method: "GET"
        })
        .then ( (response:any) => {
            if(response.status==200)
                return response.json();

            else
                throw new Error(response);
        })
        .then( (json) => {
            setAllInvolved(json);
            console.log(json);
        })
        .catch( error =>{
            alert(error);
        })
    },[])

    return(
        <IonPage>
            <IonRow>
                <IonItem>
                    <h2>Liste des enchères et leurs status</h2>
                </IonItem>
            </IonRow>

            <IonRow>
               <IonItem>
               <IonGrid>
                    <h3>Enchères possedées</h3>
                    {
                        allPossesed.map( (ind:any,index:number) =>(
                            <EnchereStatus key={index} description={ind.description} price={ind.price} status={ind.status} />
                        ))
                    }
                </IonGrid>
               </IonItem>

                <IonItem>
                <IonGrid>
                <h3>Enchères participées</h3>
            {
                allInvolved.map( (ind:any,index:number) =>(
                    <EnchereStatus key={index} description={ind.description} price={ind.price} status={ind.status} />
                ))
            }
                </IonGrid>
                </IonItem>
            </IonRow>
            

            

        </IonPage>
    );
}
export default EnchereList;