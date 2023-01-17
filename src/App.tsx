import { Redirect, Route } from 'react-router-dom';
import { IonApp,IonButton,IonCol,IonContent,IonGrid,IonHeader,IonInput,IonItem,IonLabel,IonRouterOutlet, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useRef } from 'react';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';
import LoginAdmin from './components/LoginAdmin';
import ListeVehicule from './components/ListeVehicule';
import DetailVehicule from './components/DetailsVehicule';
import DetailsVehicule from './components/DetailsVehicule';

setupIonicReact();

const App: React.FC = () => (
  // Router for message
  // <IonApp>
  //   <IonReactRouter>
  //     <IonRouterOutlet>
  //       <Route path="/" exact={true}>
  //         <Redirect to="/home" />
  //       </Route>
  //       <Route path="/home" exact={true}>
  //         <Home />
  //       </Route>
  //       <Route path="/message/:id">
  //          <ViewMessage />
  //       </Route>
  //     </IonRouterOutlet>
  //   </IonReactRouter>
  // </IonApp>

  <IonReactRouter>
      <IonRouterOutlet>
      <Route path="/home" exact={true}>
        <Home />
      </Route>

      <Route path="/message/:id">
        <ViewMessage />
      </Route>
      
        <Route path="/login:idVehicule" component={LoginAdmin} />
        <Route path="/listeVehicule" component={ListeVehicule} />
        <Route path="/detailsVehicule/:id" component={DetailsVehicule} />
        <Route path="/detailVehicule" component={DetailVehicule} />
        {/* when a user visits the root URL of the app ("/"), it redirects them to the "/dashboard" URL. */}
        <Redirect exact from="/" to="/listeVehicule" />
      </IonRouterOutlet>
    </IonReactRouter>

);


export default App;