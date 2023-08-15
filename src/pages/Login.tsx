import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import React from "react";

import { logInOutline, personCircleOutline } from "ionicons/icons";

import OtaoLogo from "../assets/otao-logo.svg";

const Login: React.FC = () => {
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');
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
                    <img src={OtaoLogo} alt="OtaoDev Logo" width={"50%"}/>
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput label="Email" type="email" placeholder="contato@otao.dev.br" labelPlacement="floating" fill="outline"></IonInput>
                            <IonInput className="ion-margin-top" label="Senha" type="password" placeholder="Uma senha" labelPlacement="floating" fill="outline"></IonInput>
                            <IonButton className="ion-margin-top" type="submit" expand="block">
                                Entrar
                                <IonIcon icon={logInOutline} slot="end"/>
                            </IonButton>
                            <IonButton routerLink="/register" color={"secondary"} className="ion-margin-top" type="button" expand="block">
                                Criar conta
                                <IonIcon icon={personCircleOutline} slot="end"/>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;