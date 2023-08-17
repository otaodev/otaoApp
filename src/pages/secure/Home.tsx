import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import React from "react";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                OtaoDasCoisas...
            </IonContent>
        </IonPage>
    );
};

export default Home;