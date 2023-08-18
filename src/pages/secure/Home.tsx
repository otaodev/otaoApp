import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonRadio, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import OtaoLogo from "../../assets/otao-logo.svg";
import { logOutOutline } from "ionicons/icons";
import keycloakConfig from '../../configs/keycloak-config';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {useAuth} from './../../contexts/AuthContext.js';

const Home: React.FC = () => {
    const history = useHistory();
    const { accessToken, setAccessToken } = useAuth();
    
    const doLogout = async () => {
        try {
            console.log('aqui'); 
            if (accessToken) {
                await axios.get(`${keycloakConfig.url}/realms/${keycloakConfig.realm}/protocol/openid-connect/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true, // Manter cookies para sessão
                });
            }
            console.log(accessToken);
            history.push('/');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    }

    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <div className="ion-text-center ion-padding">
                            <img src={OtaoLogo} alt="OtaoDev Logo" width={"30%"} />
                        </div>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonItem>
                        <IonLabel>
                            <code>overlay</code>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            <code>reveal</code>
                        </IonLabel>
                    </IonItem>
                </IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle style={{ textAlign: 'center', flex: '1' }}>Home</IonTitle>

                        <IonButton fill="clear" slot="end" color={"secondary"} onClick={doLogout}>
                            <IonIcon icon={logOutOutline}  />
                        </IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
            </IonPage>
        </>
    );
};

export default Home;