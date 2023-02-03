import { IonButton, IonGrid, IonHeader, IonItem, IonRow, IonToolbar } from "@ionic/react";
import { FC, useEffect, useState } from "react";
import { getUrl } from "../data/Url";
import { useHistory } from "react-router";

const Header:FC<{title:string}> = (props) =>{
    const [currentSolde, setCurrentSolde] = useState<any>(null);
    const history = useHistory();

    useEffect(() => {
        fetch(getUrl()+"/clients/getSolde?idPersonne="+localStorage.getItem("idPersonne"), {
            method: "GET"
        })
        .then ( (response:any) => {
            if(response.status==200)
                return response.json();

            else
                throw new Error(response);
        })
        .then( (json) => {
            setCurrentSolde(json);
            console.log(json);
        })
        .catch( error =>{
            alert(error);
        })
    
      
    }, [])
    
    const checkSolde = () =>{
        history.push("/rechargeAccount");
    }

    return(
        <>
             <IonHeader> 
            <IonToolbar>
                <IonRow>
                    <IonGrid>{props.title}</IonGrid>
                    <IonGrid>
                        <IonButton onClick={checkSolde} >Solde :  {currentSolde?.solde}</IonButton>
                    </IonGrid>
                </IonRow>
            </IonToolbar>
            </IonHeader> 
        </>
    )
}
export default Header;