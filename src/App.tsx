import { Redirect, Route } from 'react-router-dom';
import { IonApp,IonButton,IonCol,IonContent,IonGrid,IonHeader,IonIcon,IonInput,IonItem,IonLabel,IonRouterOutlet, IonRow, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
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

import LoginAdmin from './components/LoginAdmin';
import ListeVehicule from './components/ListeVehicule';
import DetailVehicule from './components/DetailsVehicule';
import DetailsVehicule from './components/DetailsVehicule';
import { airplane, albums, home } from 'ionicons/icons';
import Login from './pages/Login';
import Accueil from './pages/Accueil';
import RechargeAccount from './pages/RechargeAccount';
import AddAuction from './pages/AddAuction';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
      <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
             <Route path="/login" component={Login} />
             <Route path="/home" component={Accueil} />
             <Route path="/rechargeAccount" component={RechargeAccount} />
             <Route path="/addAuction" component={AddAuction} />
              <Redirect exact from="/" to="/login" />
        </IonRouterOutlet>

      <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/addAuction">
            <IonIcon icon={albums} />
            <IonLabel>Add auction</IonLabel>
          </IonTabButton>
        </IonTabBar>
      
        </IonTabs>
    </IonReactRouter>
    </IonApp>

);


export default App;