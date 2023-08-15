import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from "ionicons/icons";

import React from "react";

const Register: React.FC = () => {
    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister');
    }

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color={'primary'}>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" text={"voltar"}></IonBackButton>
                </IonButtons>
                <IonTitle>Crie a sua conta</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent scrollY={false}>
            <IonCard>
                <IonCardContent>
                    <form onSubmit={doRegister}>
                        <IonInput label="Email" type="email" placeholder="contato@otao.dev.br" labelPlacement="floating" fill="outline"></IonInput>
                        <IonInput className="ion-margin-top" label="Senha" type="password" placeholder="Uma senha" labelPlacement="floating" fill="outline"></IonInput>
                        <IonInput className="ion-margin-top" label="Confirme sua Senha" type="password" placeholder="Uma senha" labelPlacement="floating" fill="outline"></IonInput>
                        <IonButton className="ion-margin-top" type="submit" expand="block">
                            Entrar
                            <IonIcon icon={checkmarkDoneOutline} slot="end"/>
                        </IonButton>
                    </form>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    );
};

export default Register;