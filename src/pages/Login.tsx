import React, { useState } from "react";

import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import { logInOutline, personCircleOutline } from "ionicons/icons";

import keycloakConfig from '../configs/keycloak-config.js';

import axios from 'axios';

import OtaoLogo from "../assets/otao-logo.svg";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const doLogin = async (event: any) => {
        event.preventDefault();

        const loginData = {
            username: email,
            password: password,
            grant_type: 'password',
            client_id: keycloakConfig.clientId,
            client_secret: '4lccD9xhorLJ2rhEoeqZ93rzsIyBLoFo'
        };

        try {
            const response = await axios.post(
                `${keycloakConfig.url}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`,
                new URLSearchParams(loginData),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            setAuthenticated(true);

            window.location.href = '/home';
        } catch (error) {

            console.error(error);
        }

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className="ion-text-center ion-padding">
                    <img src={OtaoLogo} alt="OtaoDev Logo" width={"50%"} />
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput
                                value={email}
                                onIonChange={e => setEmail(e.detail.value!)}
                                label="Email"
                                type="email"
                                placeholder="contato@otao.dev.br"
                                labelPlacement="floating"
                                fill="outline"></IonInput>

                            <IonInput
                                value={password}
                                onIonChange={e => setPassword(e.detail.value!)}
                                className="ion-margin-top"
                                label="Senha"
                                type="password"
                                placeholder="Uma senha"
                                labelPlacement="floating"
                                fill="outline"></IonInput>

                            <IonButton className="ion-margin-top" type="submit" expand="block">
                                Entrar
                                <IonIcon icon={logInOutline} slot="end" />
                            </IonButton>
                            <IonButton routerLink="/register" color={"secondary"} className="ion-margin-top" type="button" expand="block">
                                Criar conta
                                <IonIcon icon={personCircleOutline} slot="end" />
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;