import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonPage,
    IonTitle
} from '@ionic/react';
import './Home.css';
import {
    IoCreateOutline,
    IoSearchOutline,
    IoSettingsOutline
} from "react-icons/io5";

const Home: React.FC = () => {
    const decks = ['Deck 1', 'Deck 2', 'Deck 3']
    return (
        <IonPage>
            <IonContent>
                <div className={'ion-padding home-container'}>
                    <div className={'ion-padding ion-display-flex ion-justify-content-center'} style={{gap: '1rem'}}>
                        <IonButton>
                            <IoCreateOutline slot="start"/>
                            Create Deck
                        </IonButton>
                        <IonButton color={'light'}>
                            <IoSearchOutline slot="start"/>
                            Card Browser
                        </IonButton>
                        <IonButton color={'light'}>
                            <IoSettingsOutline slot="start"/>
                            Settings
                        </IonButton>
                    </div>

                    <div className={'ion-text-center ion-padding-top'}>
                        <IonTitle>Decks</IonTitle>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        paddingTop: '1rem'
                    }}>
                        {decks.map((deck) => (
                            <IonCard key={deck} style={{minWidth: '50%'}}>
                                <IonCardHeader>
                                    <IonCardTitle>{deck}</IonCardTitle>
                                    <IonCardSubtitle>X cards due, Y new</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <div className={'ion-display-flex ion-justify-content-end'}>
                                        <IonButton fill="clear">Add Cards</IonButton>
                                        <IonButton>Study</IonButton>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        ))}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
